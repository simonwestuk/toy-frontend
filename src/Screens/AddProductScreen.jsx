import React, {useState, useEffect} from 'react';
import FormContainer from '../Components/FormContainer';
import {Form, Button} from 'react-bootstrap'
import Loader from '../Components/Loader'
import { render } from '@testing-library/react';


function AddProductScreen() {

    const [price, setPrice] = useState(0)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    const submitHandler = async () =>{

        var file = document.getElementById("image")['files'][0]

        var reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)

        console.log(image)
        await fetch('https://localhost:7214/api/products', 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name: name,
                Price: price,
                Description: desc,
                Image: image
            })
        })
       .then(response => response.json())
       .catch((error) => {
            console.error('error', error)
       })
        

    }


  return <div>

    <h1 className="py-3 text-center">Add Product</h1>
    <FormContainer>

    <Form id="upload" encType="multipart/form-data">

        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Product Name..." 
                onChange={(e) => setName(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
            <Form.Label>Product Price</Form.Label>
            <Form.Control 
                type="number" 
                placeholder="Product Price (£)..." 
                onChange={(e) => setPrice(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
            <Form.Label>Product Description</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Product Description..." 
                onChange={(e) => setDesc(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="image" className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" />
        </Form.Group>
        
        <Button 
            variant="primary"
            className="w-100"
            onClick={submitHandler}
        >  <div>Add Product</div>
        </Button>
    </Form>



    </FormContainer>


  </div>;
}

export default AddProductScreen;
