
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
    // Parse form data from request
    const formData = await req.json();
    console.log("Received form submission:", formData);

    // Construct email content based on form type
    let subject = "New Form Submission";
    let body = "";
    let success = true;
    let message = "Form submitted successfully! We'll contact you soon.";

    if (formData.formType === "consultation") {
      subject = `AI Consultation Request - ${formData.name}`;
      body = `
Name: ${formData.name}
Email: ${formData.email}
Business Details: ${formData.message}
      `;
    } else if (formData.formType === "getStarted") {
      subject = `New Project Inquiry - ${formData.package}`;
      body = `
Name: ${formData.name}
Email: ${formData.email}
Package: ${formData.package}
Project Details: ${formData.details}
      `;
    } else if (formData.formType === "launchPromo") {
      subject = `Free Chatbot Installation Request - ${formData.name}`;
      body = `
Name: ${formData.name}
Email: ${formData.email}
Business Name: ${formData.businessName || 'N/A'}
Website: ${formData.website || 'N/A'}
Facebook Page: ${formData.facebookPage || 'N/A'}
Additional Details: ${formData.details || 'N/A'}
      `;
      message = "Thanks for your interest in our free chatbot installation! We'll contact you shortly to get started.";
    } else if (formData.formType === "quiz") {
      subject = `Quiz Results - ${formData.recommendedPackage}`;
      body = `
Name: ${formData.name || 'N/A'}
Email: ${formData.email || 'N/A'}
Quiz Answers: ${JSON.stringify(formData.answers || {}, null, 2)}
Recommended Package: ${formData.recommendedPackage || 'N/A'}
      `;
    }

    // In a production environment, the email would be sent to hello@grdverse.com
    // For now, we'll just log the data and return a success message
    console.log("Would send email to hello@grdverse.com with:", { subject, body });

    // Return success response
    return new Response(
      JSON.stringify({ 
        success, 
        message 
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
