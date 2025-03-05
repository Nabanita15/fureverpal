import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "../../models/user";

const saltRounds = 10;

// ✅ Improved Database Connection Handling
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("✅ Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);
    throw new Error("Database connection error");
  }
};

// ✅ Helper function to hash password
const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

export default async function signup(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectDB(); // ✅ Ensures database connection is established

    const { name, email, password } = req.body;

    // ✅ Better Input Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // ✅ Hash password separately
    const hashedPassword = await hashPassword(password);

    // ✅ Create User
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // ✅ Respond with success message
    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("❌ Signup API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
