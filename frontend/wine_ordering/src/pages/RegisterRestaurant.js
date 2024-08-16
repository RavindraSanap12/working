import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbars from '../components/Layout/Navbars';
import Footer from '../components/Layout/Footer';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link, useNavigate } from 'react-router-dom';

function RegisterRestaurant() {
    const [shopname, setShopname] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [statename, setStatename] = useState('');
    const [city, setCity] = useState('');
    const [postalcode, setPostalcode] = useState('');
    const [shopcontact, setShopcontact] = useState('');
    const [shopemail, setShopemail] = useState('');
    const [ownername, setOwnername] = useState('');
    const [ownercontact, setOwnercontact] = useState('');
    const [owneremail, setOwneremail] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    // State for opening and closing times
    const [openingTimes, setOpeningTimes] = useState({
        monday: { open: null, close: null },
        tuesday: { open: null, close: null },
        wednesday: { open: null, close: null },
        thursday: { open: null, close: null },
        friday: { open: null, close: null },
        saturday: { open: null, close: null },
        sunday: { open: null, close: null },
    });


    const handleTimeChange = (day, type, time) => {
        setOpeningTimes({
            ...openingTimes,
            [day]: { ...openingTimes[day], [type]: time },
        });
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setError(null);
                },
                (err) => {
                    setError(err.message);
                    setLocation(null);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/')


        // Collect form data
        const formData = {
            shopname,
            password,
            location,
            statename,
            city,
            postalcode,
            shopcontact,
            shopemail,
            ownername,
            ownercontact,
            owneremail,
            openingTimes,
        }
        console.log(formData)
    }

    return (
        <>
            <Navbars title="Register you Restaurant"/>
            <div className='registerbody'>
            <div className='registerform'>
                <Form className='form' onSubmit={handleSubmit}>
                    <h5 className='registerheading'>Register your Restaurant</h5>
                    <h5 className='allreadyaccount'>Allready have an Account? <Link to='/loginrestaurant'>Login here</Link></h5>
                    <Form.Group className="mb-3" controlId="shopname">
                        <Form.Label>Shop Name</Form.Label>
                        <Form.Control className='formcontrol' value={shopname} onChange={(e) => setShopname(e.target.value)} type="text" placeholder="Enter Shop Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='formcontrol' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }} >
                        <Button variant="primary" onClick={getLocation} style={{ marginRight: '10px' }}>
                            Get Location
                        </Button>
                        <Form.Control
                            id='longitude'
                            style={{ width: '50%' }}
                            className='formcontrol'
                            type="text"
                            value={location?.longitude || ''}
                            placeholder="Longitude"
                            readOnly
                        />
                        <Form.Control
                            id='latitude'
                            style={{ width: '50%' }}
                            className='formcontrol'
                            type="text"
                            value={location?.latitude || ''}
                            placeholder="Latitude"
                            readOnly
                        />
                    </Form.Group>
                    <h5 className='errormessage'>{error}</h5>

                    <Form.Group className="mb-3" controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control className='formcontrol' value={statename} onChange={(e) => setStatename(e.target.value)} type="text" placeholder="Enter State" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control className='formcontrol' value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter City" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="postalcode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control className='formcontrol' value={postalcode} onChange={(e) => setPostalcode(e.target.value)} type="number" placeholder="Enter Postal Code" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="shopcontactnumber">
                        <Form.Label>Shop Contact Number</Form.Label>
                        <Form.Control className='formcontrol' value={shopcontact} onChange={(e) => setShopcontact(e.target.value)} type="number" placeholder="Enter Shop Contact Number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="shopemail">
                        <Form.Label>Shop Email</Form.Label>
                        <Form.Control className='formcontrol' value={shopemail} onChange={(e) => setShopemail(e.target.value)} type="email" placeholder="Enter Shop Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ownername">
                        <Form.Label>Owner Name</Form.Label>
                        <Form.Control className='formcontrol' value={ownername} onChange={(e) => setOwnername(e.target.value)} type="text" placeholder="Enter Owner Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ownercontactnumber">
                        <Form.Label>Owner Contact Number</Form.Label>
                        <Form.Control className='formcontrol' value={ownercontact} onChange={(e) => setOwnercontact(e.target.value)} type="number" placeholder="Enter Owner Contact Number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="owneremail">
                        <Form.Label>Owner Email</Form.Label>
                        <Form.Control className='formcontrol' value={owneremail} onChange={(e) => setOwneremail(e.target.value)} type="email" placeholder="Enter Owner Email" required />
                    </Form.Group>

                    <h5>Open Hours</h5>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {Object.keys(openingTimes).map(day => (
                            <Form.Group className="mb-3" key={day} controlId={`formBasicTime-${day}`}>
                                <Form.Label>{day.charAt(0).toUpperCase() + day.slice(1)}</Form.Label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <TimePicker
                                        label={`Opening time for ${day.charAt(0).toUpperCase() + day.slice(1)}`}
                                        value={openingTimes[day].open}
                                        onChange={(time) => handleTimeChange(day, 'open', time)}
                                    />
                                    <TimePicker
                                        label={`Closing time for ${day.charAt(0).toUpperCase() + day.slice(1)}`}
                                        value={openingTimes[day].close}
                                        onChange={(time) => handleTimeChange(day, 'close', time)}
                                    />
                                </div>
                            </Form.Group>
                        ))}
                    </LocalizationProvider>

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

export default RegisterRestaurant;
