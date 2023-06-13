import Link from "next/link"

function List() {
 
    return (
     <div>
       <h2>장바구니 cart 페이지</h2>
       <Link href="cart/payment">결제페이지</Link>
     </div>
    )
  }
 
  export default List
  