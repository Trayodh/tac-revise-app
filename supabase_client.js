// Supabase Client Initialization
// Configure your project URL and Anon Key here:
const SUPABASE_URL = "https://usjzsdvsasjtsyzrvivx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzanpzZHZzYXNqdHN5enJ2aXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNTUxMzksImV4cCI6MjA5NDgzMTEzOX0.8wLng1SDAhFPGvk5PQRu8XCqEWClpNPqHgEGpAx1vjk";

let supabaseClientInstance = null;

if (SUPABASE_URL !== "YOUR_SUPABASE_URL" && SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY") {
  try {
    // In @supabase/supabase-js CDN, the global variable is 'supabase'
    if (typeof supabase !== 'undefined' && supabase.createClient) {
      supabaseClientInstance = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log("Supabase Client initialized successfully.");
    } else {
      console.error("Supabase CDN library was not loaded properly.");
    }
  } catch (e) {
    console.error("Failed to initialize Supabase client:", e);
  }
} else {
  console.warn("Supabase is not configured yet. Running in offline/localStorage fallback mode.");
}
