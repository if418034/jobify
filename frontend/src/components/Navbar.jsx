import React from 'react';
import Wrapper from "../assets/wrappers/Navbar.js";
import {FaAlignLeft} from "react-icons/all.js";
import Logo from "./Logo";
import {useDashboardContext} from "../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const Navbar = () => {
    const {toggleSidebar} = useDashboardContext();
    return (
        <Wrapper>
            <div className="nav-center">
                <button type='button' className='toggle-btn' onClick={toggleSidebar}>
                    <FaAlignLeft/>
                </button>
                <div>
                    <Logo/>
                    <h4 className="logo-text">dashboard</h4>
                </div>
                <ThemeToggle/>
                <LogoutContainer/>
            </div>
        </Wrapper>
    );
};

export default Navbar;
