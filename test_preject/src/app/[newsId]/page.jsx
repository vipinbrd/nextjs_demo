'use client'
import { useParams } from "next/navigation";

export default function NewsDetail(){
    const param=useParams()

    
    console.log(param);
    return <>
    <h1> i am new detail page</h1></>


}