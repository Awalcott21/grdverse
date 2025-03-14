
// Custom type definitions for Supabase tables that don't require modifying the generated types

export interface QuizSubmission {
  id?: string;
  name: string | null;
  email: string;
  answers: {
    hasWebsite: string;
    biggestStruggle: string;
    launchTimeline: string;
  };
  recommended_package: string | null;
  created_at?: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  message: string;
  form_type?: string;
  created_at?: string;
}
