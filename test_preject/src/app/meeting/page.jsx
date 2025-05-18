'use client'
import Head from "next/head"
import Link from "next/link"

export default function Meeting(){

    return <>
    <Head>
        <title>My app</title>
        <meta name="description" content="this is home page"/>
    </Head>
     <Link href='/meeting/1'>Meeting 1</Link>
     <Link href="/meeting/2">Meeting 2</Link>
     <Link href="meeting/3">Meeting 3</Link>
    </>
}