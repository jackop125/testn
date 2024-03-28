import { useEffect } from "react"


const Home = () => {
    useEffect(()=>{
        console.log("Use Effect is CAlled");
    })
  return (
    <>
    {console.log("Home Body is Called CAlled")}
    <h1>Home Page </h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus dolore alias officia voluptate assumenda veniam inventore accusamus. Iure quisquam voluptate incidunt dolorem, beatae molestiae magni impedit eveniet dolorum asperiores.</p>
    </>
  )
}

export default Home