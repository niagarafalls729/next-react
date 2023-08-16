
import { MongoClient } from "mongodb"
import { connectDB } from "./util/database"
import Link from "next/link";
import DetailLink from "./list/DetailLink";
import Write from "./write/page";
export default async function Home() {

  const client = await connectDB;
  const db  = client.db('forum') 
  let result = await db.collection('post').find().toArray()
  
  console.log("re",result)
  // console.log("ddd",result[0].title)
    return (
      <div className="list-bg">
      <Link href={'list/'}>목록보러가기</Link>
      </div>
    )
}
 