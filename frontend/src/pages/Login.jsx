import React from 'react';
import {Link} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import Logo from "../components/Logo.jsx";
import FormRow from "../components/FormRow.jsx";

const Login = () => {
    return (
        <Wrapper>
            <form className='form'>
                <Logo/>
                <h4>login</h4>
                <FormRow type='email' name='email' defaultValue='@gmail.com'/>
                <FormRow type='password' name='password'/>
                <button type='submit' className='btn btn-block'>
                    submit
                </button>
                <button type='button' className='btn btn-block'>
                    explore the app
                </button>
                <p>
                    Not a member yet?
                    <Link to='/register' className='member-btn'>Register</Link>
                </p>
            </form>
        </Wrapper>

    )
};

export default Login;
