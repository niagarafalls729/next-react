'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"


export default function DetailLink(){
    let router = useRouter();
    let pathName = usePathname();
    let queryString = useSearchParams();
    // console.log("pathName",pathName)
    // console.log("queryString",queryString)
    return (
        <div>
            <button onClick={()=>{ router.push('/')}}>버튼</button>
            <button onClick={()=>{ router.back('/')}}>이전</button>
            <button onClick={()=>{ router.forward('/')}}>앞으로</button>
            <button onClick={()=>{ router.refresh('/')}}>새로고침</button>
            <button onClick={()=>{ router.prefetch('/')}}>페이지 미리 로드</button>
        </div>
    )
}