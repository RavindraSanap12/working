import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbars from '../../components/Layout/Navbars';
import Footer from '../../components/Layout/Footer';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterUser() {
    const [username, setUserame] = useState('');
    const [usercontact, setUsercontact] = useState('');
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()




    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/')


        // Collect form data
        const formData = {
            username,
            usercontact,
            useremail,
            password

        }
        console.log(formData)
    }

    return (
        <>
            <Navbars title="Register User Account" />
            <div className='registerbody'>
                <div className='registerform'>
                    <Form className='form' onSubmit={handleSubmit}>
                        <h5 className='registerheading'>Register User</h5>
                        <h5 className='allreadyaccount'>Allready have an Account? <Link to='/loginuser'>Login here</Link></h5>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control className='formcontrol' value={username} onChange={(e) => setUserame(e.target.value)} type="text" placeholder="Enter User Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="usercontactnumber">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control className='formcontrol' value={usercontact} onChange={(e) => setUsercontact(e.target.value)} type="number" placeholder="Enter Contact Number" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="useremail">
                            <Form.Label>User Email</Form.Label>
                            <Form.Control className='formcontrol' value={useremail} onChange={(e) => setUseremail(e.target.value)} type="email" placeholder="Enter Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='formcontrol' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" required />
                        </Form.Group>
                       
                        
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I hereby declare that the information provided in this form is accurate and complete to the best of my knowledge." required />
                        </Form.Group>
                        <center><Button className='registerbutton' variant="primary" type="submit">
                            Register
                        </Button></center>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RegisterUser;
