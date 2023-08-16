import { ObjectId } from "mongodb";
import { connectDB } from "../../app/util/database"
import Link from "next/link";
import { redirect } from 'next/navigation';


export default async function modi(req,res){
    console.log("modiApi",req.method) 
    const client = await connectDB;
    const db  = client.db('forum') 
 
    if(req.method =="POST"){
        console.log("POST")
        try {
            let arr = {
                title : req.body.title , 
                content : req.body.content
            }
            console.log("arrrr", req.body._id);
            
            await db.collection('post').updateOne(
                { _id: new ObjectId(req.body._id) }, // ObjectId로 변환하지 않음
                { $set: arr }
            ); 
            console.log("arrrr", arr); 
            res.writeHead(302, { Location: '/list' }).end()
            // res.status(302).redirect('/')     
        } catch (error) {
            console.error("POST Error:", error);
            res.status(400).redirect('/list');
        }
    }  
   
}