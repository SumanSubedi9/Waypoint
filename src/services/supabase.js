import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cvkjpwghtllilrrjbpyr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2a2pwd2dodGxsaWxycmpicHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMjY4NjIsImV4cCI6MjA0NzgwMjg2Mn0.eBLdWI28agLvO9WazwkD0SgDdWnJKL5ZWrDspK4x5zQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
