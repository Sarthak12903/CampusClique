import bcrypt from "bcryptjs";
import User from "../models/user.models.js";

export const register = async (req, res) => {
  try {
    const { fullname, collegeName, email, password, rePassword } = req.body;

    if (!fullname || !collegeName || !email || !password || !rePassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== rePassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullname,
      collegeName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      collegeName: user.collegeName,
      email: user.email,
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      collegeName: user.collegeName,
      email: user.email,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

export const logout = () => {};
