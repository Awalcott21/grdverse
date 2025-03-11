
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.json();
    console.log("Received form submission:", formData);
    
    // Log successful submission to hello@grdverse.com
    const recipientEmail = "hello@grdverse.com";
    console.log(`Form would be sent to: ${recipientEmail}`, {
      type: formData.formType,
      name: formData.name,
      email: formData.email,
      message: formData.message
    });

    // In a production environment, you would send an actual email here
    // using a service like Resend, SendGrid, etc.

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
        message: "There was an error submitting your form. Please try again." 
      }),
      { 
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  }
});
