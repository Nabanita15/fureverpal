import connection from "../connection";
import { contact as contactmodel} from "../models/contact";
export default async function contact(req,res){
    try {
        if(req.method ==="POST"){
            connection()
            const {name,email,message}=req.body;
            if(!email ||!name || !message){
                console.log("required all the fields");
                return res.status(402).json({ msg: 'required all the fields ' });
            }
            const createContact = await contactmodel.create({
                name,email,message
            })
            if(!createContact){
                console.log("contact is not created");
                return res.status(400).json({msg:"fail to create"})
            }
            return res.status(200).json({msg:"created successfully",createContact});

        }else{
            console.log("wrong request")
            return res.status(400).json({ msg: 'Bad request....' });

        }
    } catch (error) {
        console.log("api is not working",error);
        return res.status(500).json({ msg: 'API error: data not successfully created .', error: error.message });
    }
}