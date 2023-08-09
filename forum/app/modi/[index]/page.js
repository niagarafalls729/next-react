 
import { ObjectId } from "mongodb";
import { connectDB } from "../../util/database"
import DetailLink from "@/app/list/DetailLink";
import Btn from "@/app/util/button";
 
const Detail = async (porps) =>{


    const detailIDX = porps.params.index;
    console.log("detailIDX",detailIDX)
    const client = await connectDB;
    const db  = client.db('forum') 
    let result = await db.collection('post').find({ _id: new ObjectId(detailIDX)}).toArray()
    
    const buttonProps = {
        text: '이전 페이지',
        fn: 'back', 
    };
    

    console.log("modi",result,"index",porps.params.index)
    console.log("modi",result[0]._id)
    return(
        <div>
            {/* <form action=""> */}
            <form action="/api/modiApi" method="POST">
            <h1>수정페이지</h1>
            
            <h2>제목 :: <input name="title" defaultValue={result[0].title}/></h2>
            <h4>내용 :: <input name="content" defaultValue={result[0].content}/></h4>

                        <input type="hidden" name="_id" defaultValue={result[0]._id.toString()}/>


            <Btn {...buttonProps}/>
            <button type="submit">수정하기</button>
            </form>
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