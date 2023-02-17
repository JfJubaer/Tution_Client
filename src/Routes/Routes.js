import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Adservice from "../Pages/AdService/Adservice";
import Blogs from "../Pages/Blogs/Blogs";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import Enroll from "../Pages/Login/Enroll";
import Login from "../Pages/Login/Login";
import Edit from "../Pages/Reviews/Edit";
import MyReviews from "../Pages/Reviews/MyReviews";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

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
                    loader: ({ params }) => fetch(`https://a-11-server-jfjubaer.vercel.app/services/${params.id}`)
                },
                {
                    path: '/adservice',
                    element: <PrivateRoute><Adservice></Adservice></PrivateRoute>
                },
                {
                    path: '/myreviews',
                    element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
                },
                {
                    path: '/edit/:id',
                    element: <PrivateRoute><Edit></Edit></PrivateRoute>,
                    loader: ({ params }) => fetch(`https://a-11-server-jfjubaer.vercel.app/myreview/${params.id}`)
                },
                {
                    path: '/cart/:user',
                    element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                    loader: ({ params }) => fetch(`https://a-11-server-jfjubaer.vercel.app/cart/${params.user}`)
                },
            ]
        }
    ]
)

export default router;