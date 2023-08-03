'use client'
import Link from "next/link"
import {age, name} from './data.js'
function List() {
  let 장바구니 = ['Tomatoes','Pasta'];
    return (
     <div>
       <h2>장바구니 cart 페이지{age},{name}</h2>
       <Link href="cart/payment">결제페이지</Link>
       <CartItem 전달키={장바구니[0]}></CartItem>
       <CartItem 전달키={장바구니[1]}></CartItem>
     </div>
    )
  }
 function CartItem(props) {
  
  return (
    <div className="cart-item">
      <p>상품명 {props.전달키}</p>
      <p>$40</p>
      <p>1개</p>
      
    </div>
  )
 }


  export default List
  