import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cyzuoqjnctlswhhacupq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5enVvcWpuY3Rsc3doaGFjdXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNzk3MzUsImV4cCI6MjAzMzk1NTczNX0.ySqXtSLapv9cX_UF2YmsJOB6UQxldBc19NO_skNlvrA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
