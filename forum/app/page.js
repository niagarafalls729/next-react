
import { MongoClient } from "mongodb"
import { connectDB } from "./util/database"
import Link from "next/link";
import DetailLink from "./list/DetailLink";
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
            <Link href={'detail/'+result[y]._id.toString()}>
              <h4>{result[y].title}</h4>
            </Link>
            <DetailLink/>
            {/* <p>{result[y].content}</p> */}
          </div>
        ) }
      </div>
    )
}
 