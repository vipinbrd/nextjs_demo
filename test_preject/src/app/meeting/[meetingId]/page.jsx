
import data from "../../../../src/data.json"
const promise= function sfetch(){return new Promise((res,ref)=>{
        
    setTimeout(()=>{
        res("hi there")
    },3000)
})}

export default function MeetingDetail({params}){
   
    const id=params.meetingId;
   const msg= promise().then((res)=>res)

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

