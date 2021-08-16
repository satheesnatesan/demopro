import React from 'react';
import Header from './Header';
//import Navigation from './Navigation';
import Footer from './Footer';
import Entrollform from './Entrollform';
//import Form from './Form'

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <div className="navigationWrapper">
            <Entrollform/>
            <main>{children}</main>
        </div>
        <Footer/>
    </React.Fragment>
    );
};
export default Layout;
