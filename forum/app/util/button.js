'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Btn(props){
    let router = useRouter();
    console.log("props.fn",props.fn)
    if(props.fn === 'back'){
        return(
            <>
            <button onClick={()=>{ router.back('/')}}>{props.text}</button>
            </>
        )
    }else{
        return(
            <>
            <button>{props.text}</button>
            </>
        )
    }
    
}