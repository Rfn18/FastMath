const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const supabase = require("./component/supabaseClient");
const response = require("./component/response");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Ambil semua data user
app.get("/data", async (req, res) => {
  const { data, error } = await supabase.from("user_data").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// ✅ Register user
app.post("/register", async (req, res) => {
  const { nama, email, password } = req.body;
  const { data, error } = await supabase
    .from("user_data")
    .insert([{ nama, email, password }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: "User registered successfully", response });
});

// ✅ Login user
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase
    .from("user_data")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error || !data)
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({ message: "Login successful", data });
});

// ✅ Tambah course
app.post("/addcourse", async (req, res) => {
  const { judul, isi, tanggal, gambar } = req.body;
  const { data, error } = await supabase
    .from("course")
    .insert([{ judul, isi, tanggal, gambar }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: "Course added successfully", data });
});

// ✅ Ambil semua course
app.get("/course", async (req, res) => {
  const { data, error } = await supabase.from("course").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// ✅ Ambil course berdasarkan kategori
app.get("/course/:kategori", async (req, res) => {
  const { kategori } = req.params;
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .eq("kategori", kategori);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// ✅ Ambil course berdasarkan ID
app.get("/course/id/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// ✅ Update course
app.put("/course/:id", async (req, res) => {
  const { id } = req.params;
  const { judul, isi, tanggal, gambar } = req.body;
  const { data, error } = await supabase
    .from("course")
    .update({ judul, isi, tanggal, gambar })
    .eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Course updated successfully", data });
});

// ✅ Hapus course
app.delete("/course/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("course").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Course deleted successfully", data });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
