import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbars from '../components/Layout/Navbars';
import Footer from '../components/Layout/Footer';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState(null);

    const navigate = useNavigate()


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setImage(selectedFile);
    };

    const handleBackClick = () => {
        navigate('/admin');
    };

    const handleSubmit = (event) => {
        event.preventDefault();



        //after register 
        setName('');
        setPrice('');
        setDescription('');
        setCategory('');
        setStock('');
        setImage(null);


        document.getElementById('fileInput').value = '';




        // Collect form data
        const formData = {
            name,
            price,
            description,
            category,
            stock,
            image
        }
        console.log(formData)
    }

    return (
        <>
            <Navbars title="Add Product" />
            <div className='addproductbody'>
                <div className='addproductform'>
                    <Form className='form' onSubmit={handleSubmit}>
                        <h5 className='addproductheading'>Add New Product</h5>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control className='formcontrol' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Product Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control className='formcontrol' value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Enter Price" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control className='formcontrol' value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Enter Description" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control className='formcontrol' value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Enter Category" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="stock">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control className='formcontrol' value={stock} onChange={(e) => setStock(e.target.value)} type="number" placeholder="Enter Quantity" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control className='formcontrol' id="fileInput" onChange={handleFileChange} type="file" required />
                        </Form.Group>
                        <center><Button className='addproductbutton' onClick={handleBackClick} variant="primary">
                            Back
                        </Button>
                            <Button className='addproductbutton' style={{ marginLeft: '10px' }} variant="primary" type="submit">
                                Add
                            </Button></center>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddProduct;
