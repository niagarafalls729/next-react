export default function Write(){
    return(
        <div>
            <h4>글작성</h4>
            <form action="/api/test" method="POST">
                <input type="text" name="title" id="title"></input><br></br>
                <input type="text" name="content" id="content"></input>
                <button type="submit">작성</button>
            </form>
        </div>
    )
}