import connection from "../connection";
export default async function logout(req, res) {
    try {
        if (req.method === "GET") {
            connection();
            res.setHeader("Set-Cookie", "jwt=; HttpOnly; Path=/; Max-Age=0; SameSite=None; Secure");
            return res.status(200).json({ msg: "Logout successful" });
        } else {
            return res.status(405).json({ msg: "Method Not Allowed" });
        }
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
}
