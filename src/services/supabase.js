import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://yobwocdqkdcxigjkosdt.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvYndvY2Rxa2RjeGlnamtvc2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4MjY4MjUsImV4cCI6MjAxODQwMjgyNX0.wxGo9FOGmFgbWdnH1EqfhFhwQJNwfuLBZVj-w39_yhM'
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl };
export default supabase;
