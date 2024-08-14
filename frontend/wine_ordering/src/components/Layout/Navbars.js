import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

function Navbars({title}) {
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

                    
                </Container>
            </Navbar>

        </>
    );
}


Navbars.defaultProps = {
    title: 'Restaurant Partner'
};

export default Navbars;