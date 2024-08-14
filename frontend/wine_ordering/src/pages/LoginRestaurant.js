import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbars from '../components/Layout/Navbars';
import Footer from '../components/Layout/Footer';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginRestaurant() {
    const [password, setPassword] = useState('');
    const [shopemail, setShopemail] = useState('');

    const navigate = useNavigate()

  


    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/')


        // Collect form data
        const formData = {
            password,
            shopemail
           
        }
        console.log(formData)
    }

    return (
        <>
            <Navbars title="Login you Restaurant"/>
            <div className='loginbody'>
            <div className='loginform'>
                <Form className='form' onSubmit={handleSubmit}>
                    <h5 className='loginheading'>Login your Restaurant</h5>
                    <h5 className='notaccount'>Not have an Account? <Link to='/registerrestaurant'>Register here</Link></h5>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Shop Email</Form.Label>
                        <Form.Control className='formcontrol' value={shopemail} onChange={(e) => setShopemail(e.target.value)} type="email" placeholder="Enter Shop Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='formcontrol' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" required />
                    </Form.Group>


                  
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

export default LoginRestaurant;
