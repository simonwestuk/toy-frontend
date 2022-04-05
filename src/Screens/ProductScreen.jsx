import React, {useEffect, useState} from 'react'
//import products from '../data/products'
import {Row, Col, Container} from 'react-bootstrap'
import Product from '../Components/Product'
import Loader from '../Components/Loader'
import axios from 'axios'

function ProductScreen() {

    //what we are trying to fetch
    const [products, SetProducts] = useState([]);
    //manage if fetching is done yet
    const [loading, SetLoading] = useState(true);

    //run use effect on component/page load
    useEffect(()=>{
        //test use effect
        console.log("Page Loaded!")

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
        
    },[]);


    return (
        <div>
            <Container>
            <h1 className="py-3 text-center">Products</h1>
            {loading ? <Loader/>:(
                <Row>
                    {products.map(product => ( 
                        <Col sm={12} md={6} lg={4}>
                            <Product product={product}/>
                        </Col>)) 
                    }   
                </Row>
            )}
            </Container>

            
           
        </div>
    )
}

export default ProductScreen
