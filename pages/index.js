
const Home=({data})=>{
    return <h1> Home page here {data.home}</h1>
}

export async function getServerSideProps() {
    // Fetch data from external API
    let resultData={};
    try {
      const res = await fetch(`http://localhost:8081/home`)
    resultData= await res.json()
    } catch (error) {
      
    }
    // Pass data to the page via props
    return { props: {data: resultData } }
  }
export default Home;