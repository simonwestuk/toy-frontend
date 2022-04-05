import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Button, Container, Row, Col, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Loader from '../Components/Loader'

function ManageProductsScreen() {
    //store products when fetched and to update the list
    const [products, SetProducts] = useState([])
    //controls page in a loading state
    const [loading, SetLoading] = useState(true)

    //runs on component load
    useEffect(()=>{
        console.log(loading)
        //create function to call api for products
        const fetchProducts = async() =>{
            //api call
            const {data} = await axios.get("https://localhost:7214/api/products")
            console.log(data)
            SetProducts(data)
            if (data){
                SetLoading(false)
            }
        }

        //Call the function
        fetchProducts()
        
    },[])

    const deleteHandler = (id) =>{
        console.log(id)
        if (window.confirm('Deletion is permanent, are you sure?')){
            const result = axios.delete(`https://localhost:7214/api/products/${id}`);
            if (result){
                window.location.reload(false)
            }
        }
    }

  return (
      
    <Container>
        <h1 className="text-center my-4">Manage Products Screen</h1>

        {loading ? <Loader/> : (
        <Table striped bordered hover responsive className="table-sm table-bg">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            
            <tbody>
                {products.map(product =>(

                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>
                            <Button 
                                as={Link} 
                                to={`/admin/product/edit/${product.id}`}
                                variant="light"
                                className="d-block"
                                >Edit</Button>
                        </td>
                        <td>
                            <Button 
                                variant="danger"
                                className="d-block"
                                onClick={() => {deleteHandler(product.id)}}
                                >Delete</Button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </Table>
    )}
    </Container>
    
  )
}

export default ManageProductsScreen