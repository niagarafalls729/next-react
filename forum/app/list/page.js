
import { MongoClient } from "mongodb"
import { connectDB } from "../util/database"
import Link from "next/link";
import DetailLink from "../list/DetailLink";
import Write from "../write/page";
import ListItem from "./ListItem";
export default async function Home() {

  const client = await connectDB;
  const db  = client.db('forum') 
  let result = await db.collection('post').find().toArray()
  result = result.map((a)=>{
    a._id = a._id.toString()
    return a
  })

  console.log("re",result)
  // console.log("ddd",result[0].title)
    return (
      <div className="list-bg">
        <ListItem result={result}></ListItem>
      <Link href={'write/'}>글쓰러가기</Link>
      </div>
    )
}
 