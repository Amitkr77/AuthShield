import bcrypt from 'bcryptjs';
import { User } from '../model/schema.js';
import jwt from 'jsonwebtoken'


export const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const saltRounds = 10; // Updated variable name for consistency

        // Hash the password
        const hashPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const authUser = new User({
            username,
            password: hashPassword,
            role
        });

        // Save the user to the database
        await authUser.save();
        res.status(201).json({ message: 'User registered successfully', user: authUser }); // Corrected user reference
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Server error' });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if both username and password are provided
        if (!username || !password) {
            return res.status(400).json({ message: 'Both username and password are required' });
        }

        // Find the user by username
        const authUser = await User.findOne({ username });
        if (!authUser) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Compare provided password with the stored hashed password
        const isValidPassword = await bcrypt.compare(password, authUser.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid password' })
        }

        const token = jwt.sign({ id: authUser._id, role: authUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(200).json({ token })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};
