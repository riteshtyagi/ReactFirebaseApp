import React from 'react'
import {Link} from 'react-router-dom'
import SingedInLinks from "./signedInLink";
import SignedOutLinks from "./signedOutLink";

const Navbar = () => {
    return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to='/' className="brand-logo left">MarioPlan</Link>
            <SingedInLinks/>
            <SignedOutLinks/>
        </div>
    </nav>
    )

};

export default Navbar;