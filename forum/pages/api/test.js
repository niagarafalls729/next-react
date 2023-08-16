import { connectDB } from "../../app/util/database"
import Link from "next/link";

export default async function handler(요청,응답){
    console.log("export default async function handler(요청,응답){",요청.method)
    const client = await connectDB;
    const db  = client.db('forum') 

    if(요청.method =="POST"){
        try {
            let arr = 요청.body
            db.collection('post').insertOne(arr)
            응답.writeHead(302, { Location: '/list' }).end()
            return 응답.status(200).redirect('/list')        
        } catch (error) {
            return 응답.status(400).redirect('/list')    
        }
    }else if(요청.method =="GET"){
        let result = await db.collection('post').find().toArray()
        return 응답.status(200).json(result)
    }else if(요청.method =="PUT"){
        console.log("PUT",요청)
    }
    // return 응답.status(200).json("dddd안녕")
    // return 응답.status(404).json("ddㅎㅋdd안녕")
   
}