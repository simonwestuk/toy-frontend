import React from 'react'

import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function HomeScreen() {
    return (
        <div>
           
            <div className="bg-banner container-flex">
                <div className="banner-content text-center">
                    <h1 className="heading-text">welcome to toy land {window.localStorage.getItem("name")} !</h1>
                    <Button as={Link} to="/products" variant="light" className="px-5">see our toys!</Button>
                </div>
            </div>

        </div>
    )
}

export default HomeScreen
