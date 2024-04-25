import React from 'react';
import Wrapper from "../assets/wrappers/LandingPage.js";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import {Link} from "react-router-dom";
const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt='jobify' className='logo'/>
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby gentrify roof party chambray, adaptogen twee truffaut retro squid direct trade selvage freegan flexitarian bitters organic salvia. Waistcoat kickstarter you probably haven't heard of them gentrify coloring book iceland. Vaporware irony cornhole scenester literally wayfarers raclette edison bulb big mood distillery cronut whatever. Biodiesel raw denim chillwave VHS readymade.
                    </p>
                    <Link to="/register" className='btn register-link'>
                        Register
                    </Link>
                    <Link to='/login' className='btn '>
                        Login / Demo User
                    </Link>
                </div>
                <img src={main} alt='job hunt' className='main img'/>
            </div>
        </Wrapper>
    );
};

export default Landing;
