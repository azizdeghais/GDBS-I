import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js"; // POSTGRESQL Framework
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Supabase
const supabaseUrl = "https://wsynxgubegxzlqcjiufh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzeW54Z3ViZWd4emxxY2ppdWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MjI3ODgsImV4cCI6MjA3Mjk5ODc4OH0.AQoVfVqv62M0pLHgerp3aongts8MNT5xPfWKmpnvIN8"
const supabase = createClient(supabaseUrl, supabaseKey);


// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Example: GET ALL TEACHERS
app.get("/participant", async (req, res) => {
  const { data, error } = await supabase
    .from("participant")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.get("/hu_staff", async (req, res) => {
  const { data, error } = await supabase
    .from("hu_staff_with_names")
    .select("*")
    .eq("approval", false);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
})

app.get("/courses/unpaid", async (req, res) => {
  const { data, error } = await supabase
    .from("course_participant_payment")
    .select("*")
    .is("payment_amount", null);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.get("/course/enrollments", async (req, res) => {
  const { data, error } = await supabase
    .from("course_enrollment_counts")
    .select("*");

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.get("/courses/english", async (req, res) => {
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .eq("language", "English");

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.get("/payments/pending", async (req, res) => {
  const { data, error } = await supabase
    .from("payment")
    .select("*")
    .eq("status", "Pending");

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.get("/tickets/open", async (req, res) => {
  const { data, error } = await supabase
    .from("open_tickets")
    .select("*");

  if (error) return res.status(500).json({ error: error.message });
  res.json(Array.isArray(data) ? data : []);
});

app.get("/courses/hybrid", async (req, res) => {
  const { data, error } = await supabase
    .from("hybrid_courses")
    .select("*");

  if (error) return res.status(500).json({ error: error.message });
  res.json(Array.isArray(data) ? data : []);
});

app.get("/instructors/german-c1", async (req, res) => {
  const { data, error } = await supabase
    .from("german_c1_instructors")
    .select("*");

  if (error) return res.status(500).json({ error: error.message });
  res.json(Array.isArray(data) ? data : []);
});

app.get("/test-attempts/passed", async (req, res) => {
  const { data, error } = await supabase
    .from("passed_test_attempts")
    .select("*");

  if (error) return res.status(500).json({ error: error.message });
  res.json(Array.isArray(data) ? data : []);
});

app.listen(3000, () => {
  console.log('Server running...');
});