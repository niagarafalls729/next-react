

export default function Home() {
   let name = 'jisu'
   let link = 'http://naver.com'
 
  return (
     <div>
      <h4 className="title" style={{color:'red',fontSize:'30px'}}>ddddd</h4>
      <p className="title-sub">by dev kim {name}</p>
      <a href={link}>링크</a>
     </div>
  )
}
