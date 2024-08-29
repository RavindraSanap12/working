import React from 'react'
import Navbars from '../../components/Layout/Navbars'
import Button from 'react-bootstrap/Button'
import Footer from '../../components/Layout/Footer';
import { useNavigate } from 'react-router-dom';
import '../../App.css';


function User() {
    const navigate = useNavigate()
    const handleregisterClick = () => {
        navigate('/registeruser');
    };
    const handleloginClick = () => {
        navigate('/loginuser');
    };
    return (
        <div className='body'>
            <Navbars title="User Home Page" />


            <div className='register_restaurant'>
                <div className='register_restaurant_sub'>
                    <h2 className='headingforregisterorlogin'>User Dashboard</h2>
                    <br />
                    <Button className='button' onClick={handleloginClick} variant="primary">Login</Button>
                    <Button className='button' onClick={handleregisterClick} variant="outline-primary">Register</Button>
                    <h5 className='contact'>Contact Us +919763057428</h5>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default User
