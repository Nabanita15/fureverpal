import { compare } from "bcrypt";
import { User as usermodel } from "../../models/user";
import jwt from "jsonwebtoken";
import connection from "../connection";
const secretKey = "secretKey"; 

export default async function login(req, res) {
    try {
        if (req.method === "POST") {
            connection();
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ msg: "All fields are required" });
            }

            const userExist = await usermodel.findOne({ email: email });
            if (!userExist) {
                return res.status(400).json({ msg: "User not found" });
            }

            const comparePassword = await compare(password, userExist.password);
            if (!comparePassword) {
                return res.status(401).json({ msg: "Invalid password" }); // Corrected status code
            }

            const token = jwt.sign({ id: userExist._id }, secretKey, { expiresIn: "1d" });
            if (!token) {
                return res.status(500).json({ msg: "Token creation failed" });
            }

            res.setHeader("Set-Cookie", `jwt=${token}; HttpOnly; Path=/; Max-Age=86400`); 

            return res.status(200).json({ msg: "Login successful", token }); 
        } else {
            res.status(404).json({ message: 'Not Found' });
        }
    } catch (error) {
        console.error("API error:", error);
        return res.status(500).json({ msg: 'API error: Internal server error', error: error.message });
    }
}