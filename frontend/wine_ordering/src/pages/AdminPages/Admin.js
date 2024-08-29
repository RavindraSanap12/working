import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from '../../components/Layout/Footer';
import Navbars from '../../components/Layout/Navbars';
import profileImg from '../../images/profile.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Admin() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const popupRef = useRef(null);

    const navigate = useNavigate()

    const handleaddproductClick = () => {
        navigate('/addproduct');
    };


    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setPopupOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <Navbars title="Admin Panel" />

            <div className='adminpanel'>
                <Sidebar />
                <div className='addproduct'>
                    <Button className='addproductbtn' onClick={handleaddproductClick} variant="warning">
                        Add Product
                    </Button>

                </div>
                <img
                    className='profile'
                    src={profileImg}
                    alt='Profile'
                    onClick={togglePopup}
                />
                {isPopupOpen && (
                    <div className='popup' ref={popupRef}>
                        <ul className='popup-content'>
                            <li><button onClick={() => alert('Profile View')}>View Profile</button></li>
                            <li><button onClick={() => alert('Logging Out')}>Logout</button></li>
                        </ul>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}

export default Admin;
