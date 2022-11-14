import React from 'react';
import Home from '../Pages/Home/Home';
import Footer from '../Pages/Shared/Footer';
import Nav from '../Pages/Shared/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;