 'use client'
 import { useState } from "react"
 function List() {
     
  // let 상품 = [
  //   { name: 'Tomatoes', photo: 'food0.png', 수량: 0 },
  //   { name: 'Pasta', photo: 'food1.png', 수량: 0 },
  //   { name: 'Coconut', photo: 'food2.png', 수량: 0 },
  //   { name: 'Apple', photo: 'food0.png', 수량: 0 }
  // ];

  const [상품, 상품넣기] = useState([
    { name: 'Tomatoes', photo: 'food0.png', 수량: 0 },
    { name: 'Pasta', photo: 'food1.png', 수량: 0 },
    { name: 'Coconut', photo: 'food2.png', 수량: 0 },
    { name: 'Apple', photo: 'food0.png', 수량: 0 }
  ]);
  console.log("DDDDDD")
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
        {상품.map((e, idx) => {
          return (
            <div className="food" key={idx}>
              <img src={e.photo} alt={e.name} />
              <h4>
                {e.name} $4{idx}
              </h4>
              <button
                onClick={() => {
                  const updatedCnt = [...상품];
                  updatedCnt[idx].수량 -= 1;
                  상품넣기(updatedCnt);
                }}
              >
                -
              </button>
              <span>{e.수량}</span>
              <button
                onClick={() => {
                  const updatedCnt = [...상품];
                  updatedCnt[idx].수량 += 1;
                  상품넣기(updatedCnt);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  

 export default List
 