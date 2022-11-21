import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Adservice from "../Pages/AdService/Adservice";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Enroll from "../Pages/Login/Enroll";
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/enroll',
                    element: <Enroll></Enroll>
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                },

                {
                    path: '/services',
                    element: <Services></Services>
                },
                {
                    path: '/details/:id',
                    element: <ServiceDetails></ServiceDetails>
                    ,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                {
                    path: '/adservice',
                    element: <Adservice></Adservice>
                },
                {
                    path: '/reviews',
                    element: <Reviews></Reviews>
                },
            ]
        }
    ]
)

export default router;