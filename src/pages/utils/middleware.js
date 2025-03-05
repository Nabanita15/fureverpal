import jwt, { verify } from "jsonwebtoken"
const  screteKey="screteKey"  

export default async function middleware(req,res){
try {
   const cookies =req.headers.cookie ;
   const token =cookies.jwt;

   if(!token){
    return res.status(401).json({ msg: "No token provided" });
   }
   
   const decoded = jwt.verify(token,screteKey)
} catch (error) {
    console.log("Middleware error:", error);
    return res.status(401).json({ msg: "Unauthorized", error: error.message });
}
}