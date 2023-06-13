 function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut', 'Apple']
    let arr = ['a','b','c']
    //arr.map(function(){})
    // arr.map(()=>{
    //     console.log("dd")
    // })
    // arr.map((a,b)=>{
    //     console.log("dd"+a)
    //     console.log("dd"+b)
    // })
    // const newArr = arr.map((a,b)=>{
    //         console.log("dd"+a)
    //         console.log("dd"+b)
    //         return a+b;
    //     })
    // console.log(newArr)
   return (
    <div>
      <h2>Products</h2>
      {
        상품.map((e,idx)=>{
            return (<div className="food">
            <h4>{e} $4{idx}</h4>
            </div>
            )
        })
      }
    </div>
   )
 }

 export default List
 