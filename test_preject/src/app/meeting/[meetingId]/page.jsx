
import Head from "next/head"
import data from "../../../../src/data.json"
const promise= function sfetch(){return new Promise((res,ref)=>{
        
    setTimeout(()=>{
        res("hi there")
    },500)
})}
export async function generateMetadata({ params }) {
  const id = params.meetingId;
  return {
    title: `Meeting/${id}`,
    description: "Know about meeting",
  };
}
export default async function MeetingDetail({params}){
   
    const id=  params.meetingId;
   const msg=  await promise()

    let user=data[id-1];
    if(id==3){
        return <h1>Page Not Found</h1>
    }
 
    
   
       
    return  <>

    <h1>Meeting detail page</h1>

    <h1>{`Name:-${user.name}`}</h1>
    <h1>{`Role:-${user.role}`}</h1>
    <h1>{msg}</h1>
    </>
}

