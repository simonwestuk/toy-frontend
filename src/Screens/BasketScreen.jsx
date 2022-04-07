import React, {useEffect, useState} from 'react'
//import products from '../data/products'
import {Row, Col, Container} from 'react-bootstrap'
import Product from '../Components/Product'

function ProductScreen() {

    //what we are trying to fetch
    const [products, SetProducts] = useState([]);
    const [basket, SetBasket] = useState([]);
    //run use effect on component/page load
    useEffect(()=>{
        
        var products = JSON.parse(window.localStorage.getItem("products"))
       
        if (products)
        {
            SetBasket(window.localStorage.getItem("products"))
           //If there are products in local storage

            //create function to call api for products
            const fetchProducts = async() =>{
                //api call
                fetch('https://localhost:7214/api/products/cart', {
                    method: 'POST',
                    body: JSON.stringify(products),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    SetProducts(data)
                })
                .catch(err => console.log(err))
            }

            //Call the function
            fetchProducts()
        }

       
    },[]);


    return (
        <div>
            <Container>
            <h1 className="py-3 text-center">Products</h1>
            {(
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
