
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  console.log("Function called with method:", req.method);
  console.log("Request URL:", req.url);
  
  // Log headers (without sensitive data)
  const headers = {};
  req.headers.forEach((value, key) => {
    if (key.toLowerCase() === 'authorization') {
      headers[key] = 'Bearer [redacted]';
    } else {
      headers[key] = value;
    }
  });
  console.log("Request headers:", headers);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const formData = await req.json();
    console.log("Received form submission:", formData);
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Handle different form types
    if (formData.formType === "quiz") {
      // Validate required fields for quiz
      if (!formData.email) {
        throw new Error("Missing email field in quiz submission");
      }
      
      // Store quiz submission in database
      const { error } = await supabase
        .from('quiz_submissions')
        .insert([
          { 
            name: formData.name || null, 
            email: formData.email,
            answers: formData.answers || {},
            recommended_package: formData.recommendedPackage || null
          }
        ]);
      
      if (error) {
        console.error("Supabase error:", error);
        throw new Error("Failed to store quiz submission: " + error.message);
      }
      
      // Send notification email (placeholder for now)
      console.log(`Quiz submission would be sent to: hello@grdverse.com`, {
        type: "quiz",
        name: formData.name,
        email: formData.email,
        answers: formData.answers,
        recommendedPackage: formData.recommendedPackage
      });
    } else {
      // Handle regular contact form submission
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Missing required fields in contact form");
      }
      
      // Store contact form submission
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message,
            form_type: formData.formType || "contact"
          }
        ]);
      
      if (error) {
        console.error("Supabase error:", error);
        throw new Error("Failed to store contact submission: " + error.message);
      }
      
      // Log successful submission to hello@grdverse.com
      console.log(`Form would be sent to: hello@grdverse.com`, {
        type: formData.formType || "contact",
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Form submitted successfully! We'll contact you soon."
      }),
      { 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false,
        message: error.message || "There was an error submitting your form. Please try again."
      }),
      { 
        status: 400,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  }
});
