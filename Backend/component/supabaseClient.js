const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://gnahapptcvcgtcycnavh.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduYWhhcHB0Y3ZjZ3RjeWNuYXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4NjUyMjgsImV4cCI6MjA3MDQ0MTIyOH0.yj1_m-dcsf6yFADC-2Xf-MHNZ-l56JytHKD3NSUBY-M";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = supabase;
