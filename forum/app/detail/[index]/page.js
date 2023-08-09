
import { ObjectId } from "mongodb";
import { connectDB } from "../../util/database"
import DetailLink from "@/app/list/DetailLink";

const Detail = async (porps) =>{
 
    const detailIDX = porps.params.index; 
    const client = await connectDB;
    const db  = client.db('forum') 
    let result = await db.collection('post').find({ _id: new ObjectId(detailIDX)}).toArray()
    
    console.log("detail",result,"index",porps.params.index)
    return(
        <div>
            <h1>상세페이지</h1>
            <h2>글번호 :: {result[0].title}</h2>
            <h4>글내용 :: {result[0].content}</h4>
            
        </div>
    )
}

export default Detail;

// export default function Detail(index){
//         return(
//             <div>
//                 <h1>상세페이지</h1>
//                 <h2>글번호 :: {index.title}</h2>
//                 <h4>글내용 :: {index.content}</h4>
//             </div>
//         )
// }