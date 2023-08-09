
import { MongoClient } from "mongodb"
import { connectDB } from "../util/database"
import Link from "next/link";
import DetailLink from "../list/DetailLink";
import Write from "../write/page";
export default async function Home() {

  const client = await connectDB;
  const db  = client.db('forum') 
  let result = await db.collection('post').find().toArray()
  
  console.log("re",result)
  // console.log("ddd",result[0].title)
    return (
      <div className="list-bg">
        { result.map((x,y)=>

          
          <div className="list-item" key={y}>
            <div className="between">
            <Link href={'detail/'+result[y]._id.toString()}>
              <span>{result[y].title}</span>
            </Link>
            <Link href={'modi/'+result[y]._id.toString()}>
              <button className="redBtn" style={{textAlign:'right'}}>수정 </button>
            </Link>
            </div>
            <DetailLink/>
            {/* <p>{result[y].content}</p> */}
          </div>
        ) }
      <Link href={'write/'}>글쓰러가기</Link>
      </div>
    )
}
 