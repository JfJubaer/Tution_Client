import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Enroll from "../Pages/Login/Enroll";
import Login from "../Pages/Login/Login";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";

 const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/enroll',
                    element:<Enroll></Enroll>
                },
                {
                    path:'/blogs',
                    element:<Blogs></Blogs>
                },
                
                {
                    path:'/services',
                    element:<Services></Services>
                },
                {
                    path:'/details',
                    element:<ServiceDetails></ServiceDetails>
                },
            ]
        }
    ]
)

export default router;