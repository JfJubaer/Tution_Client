import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Enroll from "../Pages/Login/Enroll";
import Login from "../Pages/Login/Login";

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
            ]
        }
    ]
)

export default router;