import { React, useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Cart() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        var products = JSON.parse(window.localStorage.getItem("products"))
        if (!products)
        {
            products = []
        }
        setCount(products.length)

    },[])

    return (
        <>
        <Nav.Link as={Link} to="/basket">Basket <b>{ count }</b></Nav.Link>
        </>
    )
}

export default Cart;
