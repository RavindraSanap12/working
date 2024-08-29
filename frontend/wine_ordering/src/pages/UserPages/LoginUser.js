import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbars from '../../components/Layout/Navbars';
import Footer from '../../components/Layout/Footer';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginUser() {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()




    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/')


        // Collect form data
        const formData = {
            useremail,
            password

        }
        console.log(formData)
    }

    return (
        <>
            <Navbars title="Login you Restaurant" />
            <div className='loginbody'>
                <div className='loginform'>
                    <Form className='form' onSubmit={handleSubmit}>
                        <h5 className='loginheading'>Login your User Account</h5>
                        <h5 className='notaccount'>Not have an Account? <Link to='/registeruser'>Register here</Link></h5>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>User Email</Form.Label>
                            <Form.Control className='formcontrol' value={useremail} onChange={(e) => setUseremail(e.target.value)} type="email" placeholder="Enter User Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='formcontrol' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" required />
                        </Form.Group>
                        <h5 className='forgotpassword'>Forgot Password? <Link to=''>Click here</Link></h5>




                        <center><Button className='loginbutton' variant="primary" type="submit">
                            Login
                        </Button></center>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LoginUser;
