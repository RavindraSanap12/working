import React from 'react'
import LoginLogoutNavbar from '../../components/Layout/RestaurantLogoutNavbar';
import Footer from '../../components/Layout/Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import img from '../../images/wine.jpg'
import { useNavigate } from 'react-router-dom';


function Inventory() {

    const navigate = useNavigate()

    function handlesearchbutton() {
        //for search api
    }
    function handleeditbutton() {
        navigate('/editproduct')
    }
    function handledeletebutton() {
        //for delete api
    }

    return (
        <>

            <LoginLogoutNavbar title="Inventory Management" />
            <div className='inventorybody'>

                <div>
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='headersectioncounts'>
                                            <h2 className='itemcount'>Item Count = 100</h2>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='headersectionsearch'>
                                            <Form inline>
                                                <Row>
                                                    <Col xs="auto">
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Search"
                                                            className=" mr-sm-2"
                                                        />
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Button type="submit" onClick={handlesearchbutton}>Submit</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>


                </div>

                <div className='inventoryfooter'>


                    <div>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>NO.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Stock</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><img className='productimg' src={img} alt='Product' /></td>
                                    <td>XYZ</td>
                                    <td>In Stock</td>
                                    <td>800</td>
                                    <td><Button className='editbutton' variant="primary" onClick={handleeditbutton} type="submit">
                                        Edit
                                    </Button></td>
                                    <td><Button className='deletebutton' variant="danger" onClick={handledeletebutton} type="submit">
                                        Delete
                                    </Button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><img className='productimg' src={img} alt='Product' /></td>
                                    <td>XYZ</td>
                                    <td>In Stock</td>
                                    <td>800</td>
                                    <td><Button className='editbutton' variant="primary" type="submit">
                                        Edit
                                    </Button></td>
                                    <td><Button className='deletebutton' variant="danger" type="submit">
                                        Delete
                                    </Button></td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>



                </div>

            </div>
            <Footer />
        </>
    )
}

export default Inventory