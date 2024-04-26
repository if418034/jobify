import React from 'react';
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import Logo from "../components/Logo.jsx";
import {Link} from "react-router-dom";
import FormRow from "../components/FormRow.jsx";

const Register = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Register</h4>
                <FormRow type='text' name='name'/>
                <FormRow type='text' name='lastName' labelText='last name'/>
                <FormRow type='text' name='location'/>
                <FormRow type='text' name='email'/>
                <FormRow type='password' name='password'/>
                <button type='submit' className='btn btn-block'>submit</button>
                <p>
                    Already a member?
                    <Link to='/login' className='member-btn'>Login</Link>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;
