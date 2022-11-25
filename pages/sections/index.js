import Link from "next/link";

const Sections= () => {
    return (
      <div>
          <div>
              <Link href="/sections/new">New section</Link>
              <br/>
              <Link href="/sections/list">Sections List</Link>
          </div>
      </div>
    )
  }
  
  
  export default Sections;