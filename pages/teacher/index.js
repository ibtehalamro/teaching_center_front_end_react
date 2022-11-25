import Link from "next/link";

 
 const  Teacher = () => {
  const base="/teacher";
  return (
    <div>
        <div>
            <Link href={`${base}/new`}>New Teacher</Link><br/>
            <Link href={`${base}/list`}>Teachers</Link>
         </div>
    </div>
  )
}


export default Teacher;