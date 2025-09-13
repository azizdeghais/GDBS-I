import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Supabase
const supabaseUrl = "https://wsynxgubegxzlqcjiufh.supabase.co";
const supabaseKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzeW54Z3ViZWd4emxxY2ppdWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MjI3ODgsImV4cCI6MjA3Mjk5ODc4OH0.AQoVfVqv62M0pLHgerp3aongts8MNT5xPfWKmpnvIN8"
const supabase = createClient(supabaseUrl, supabaseKey);


// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Example: GET ALL TEACHERS
app.get("/api/teachers", async (req, res) => {
  const { data, error } = await supabase.from("teachers").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server running...');
});