
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

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
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("Missing required fields");
    }
    
    // Log successful submission to hello@grdverse.com
    const recipientEmail = "hello@grdverse.com";
    console.log(`Form would be sent to: ${recipientEmail}`, {
      type: formData.formType,
      name: formData.name,
      email: formData.email,
      message: formData.message
    });

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
