import { supabase } from "./config/supabase";

async function testConnection() {
  const { data, error } = await supabase
    .from("tasks")
    .select("id, title")
    .limit(1);

  if (error) {
    console.error("❌ Supabase error:", error.message);
    return;
  }

  console.log("✅ Supabase connected!");
  console.log("Tasks:", data);
}

testConnection();