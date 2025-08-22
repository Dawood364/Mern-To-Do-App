import mongoose from "mongoose";
import express from "express";
import cors from "cors";
const app = express();
app.use(core());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://dawoodta80:tGm2beRXITHvWcvt@cluster0.jbagqfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )

  .then(() => console.log("conneced to mongodb"))
  .catch((err) => console.error("MongoDB connection error:", err));

const todoschema = new mongoose.Schema({
  name: string,
  date: string,
});

const TODO = mongoose.model("TODO", todoschema);
app.get("/", (req, res) => {
  res.send("backend is running...");
});

app.post("/todos", async (req, res) => {
  try {
    const newproduct = await TODO.create(req.body);
    res.status(200).json(newproduct);
  } catch (error) {
    console.error("Error creating todo:", err);
    res.status(500).json({ error: "Failed to create todo" });
  }
});

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
