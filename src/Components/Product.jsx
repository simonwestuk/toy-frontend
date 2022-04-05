import React from 'react'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Product({ product }) {
    return (
        <Container className="m-2">
            <h3>{product.name}</h3>
            <img className="w-100" src={product.image} alt={product.name} />
            <h4>£{product.price}</h4>
            <p>{product.description}</p>
            <Button as={Link} to={`/products/${product.id}`} className="d-block w-100 my-2" variant="light">View {product.name}</Button>
            <Button className="d-block w-100 my-2" variant="primary" onClick={ e => addToBasket(product.id) }>Add to basket</Button>
        </Container>
    )

    function addToBasket(id)
    {
        var products = JSON.parse(window.localStorage.getItem("products"))
        if (!products)
        {
            products = []
        }
        products.push(id)
        window.localStorage.setItem("products", JSON.stringify(products))

        console.log(id + " Product added to basket");
    }

}

export default Product











