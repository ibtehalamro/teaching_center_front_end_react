import Link from "next/link";
import React, { useState, useEffect } from "react";

const Sections= () => {
  const [componentName, setComponentName] = useState("new course");
  useEffect(() => {}, [componentName]);

    return (
      <div>
           sections
      </div>
    ) 
  }
  
  


  // const Sections= () => {
  //   return (
  //     <div>
  //         <div>
  //             <Link href="/sections/new">New section</Link>
  //             <br/>
  //             <Link href="/sections/list">Sections List</Link>
  //         </div>
  //     </div>
  //   )
  // }
  export default Sections;