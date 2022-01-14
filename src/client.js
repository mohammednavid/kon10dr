import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://tqbbyvfbucxiybndmkjw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MjEwMjczMywiZXhwIjoxOTU3Njc4NzMzfQ.R5Z7GxWMcn-2CYirorB8ttAljwnbcM57kxTBYxfTCxA"
);

export { supabase };
