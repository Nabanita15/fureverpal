import connection from "../connection";
import { User } from "../../models/user"
import bcrypt from "bcrypt"
const saltRounds = 10;

export default async function signup(req, res) {
    try {
        if (req.method === 'POST') {
            connection();
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ msg: 'All fields are required.' });
            }
            const existingEmail = await User.findOne({ email: email });
            if (existingEmail) {
                console.log("user already exist", existingEmail);
                return res.status(400).json({ msg: "User already exist" })
            }
            const passwordHash = await bcrypt.hash(password, saltRounds);
            const data = await User.create({
                name,
                email,
                password: passwordHash
            }
            )
            if (data) {
                return res.status(200).json({ msg: 'data is created successfully', data })
            } else {
                console.log("api is not create")
                return res.status(400).json({ msg: "data is not successfully create" })
            }
        } else {
            res.status(404).json({ message: 'Not Found' });
        }

    } catch (error) {
        console.log("api is not working", error);
        return res.status(500).json({ msg: 'API error: data not created successfully.', error: error.message });
    }
}


