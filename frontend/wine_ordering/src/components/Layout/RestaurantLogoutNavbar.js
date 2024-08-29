import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function RestaurantLogoutNavbar({ title }) {

    const navigate = useNavigate()

    function handlelogout() {
        //code here for logout
        navigate('/')
    }

    return (
        <>

            <Helmet>
                <title>{title}</title>
            </Helmet>

            <Navbar bg="primary" data-bs-theme="dark">
                <Container style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faWineBottle} style={{ color: 'white', marginRight: '5px' }} />
                        <Navbar.Brand style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>Restaurant Partner</Navbar.Brand>
                    </div>

                    <div>
                        <Button variant='primary' style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold' }} onClick={handlelogout}>Logout</Button>
                    </div>


                </Container>
            </Navbar>

        </>
    );
}


RestaurantLogoutNavbar.defaultProps = {
    title: 'Restaurant Partner'
};

export default RestaurantLogoutNavbar;