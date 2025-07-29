import User from '../models/user.models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// user creation by the admin
export const createUser = async (req, res) => {
  try {
    const { name, email, admin } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: 'User with this email already exists.' });
    }

    const defaultPassword = process.env.DEFAULT_PASSWORD;
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      admin,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// user login
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'invalid password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({
      message: 'login successful',
      token,
      data: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
