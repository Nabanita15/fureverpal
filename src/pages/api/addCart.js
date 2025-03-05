import connection from "../connection";
import { Cart } from "../../models/cart";

export default async function addCart(req, res) {
    try {
        if (req.method === 'POST') {
             connection();

            const cartItems = req.body; 

            if (!Array.isArray(cartItems) || cartItems.length === 0) {
                return res.status(400).json({ msg: "Cart is empty or invalid format" });
            }

    
            for (const item of cartItems) {
                const { name, price, quantity, total, totalOrder } = item;
                if (!name || !price || !quantity || !total || !totalOrder) {
                    return res.status(400).json({ msg: "All fields are required for every product" });
                }
            }

            const products = await Cart.insertMany(cartItems);

            if (!products) {
                return res.status(402).json({ msg: "Products could not be created" });
            }

            res.status(200).json({ msg: "Products added successfully", data: products });
        } else {
            res.status(405).json({ msg: "Method Not Allowed" });
        }
    } catch (error) {
        console.error("Network error:", error);
        res.status(500).json({ msg: "Network error" });
    }
}
