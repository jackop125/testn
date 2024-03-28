import React,{Suspense,lazy} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Home from "./components/Home";
// import Aboutus from "./components/Aboutus";
// import Contactus from "./components/Contactus";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";

const Aboutus = lazy(()=>import("./components/Aboutus"));
const Contactus = lazy(()=>import("./components/Contactus"));
const Main = ()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const indexRouter = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loadding.....</h1>}><Aboutus/></Suspense>
            },
            {
                path:"/contact",
                element:<Suspense fallback={<h1>Loadding.....</h1>}><Contactus/></Suspense>
            }
        ],
        errorElement:<ErrorPage/>
    }
    
    // {
    //     path:"/*",
    //     element:<ErrorPage/>
    // }
]);
root.render(<RouterProvider router={indexRouter}/>);