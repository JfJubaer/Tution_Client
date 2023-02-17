import React from 'react';
import { Outlet } from 'react-router-dom';
import Blogg from '../Pages/Home/Blogg';
import Footer from '../Pages/Shared/Footer';
import NavBar from '../Pages/Shared/NavBar';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Blogg></Blogg>
            <Footer></Footer>
        </div>
    );
};

export default Main;