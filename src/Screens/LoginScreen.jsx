import React, { useState } from 'react';
import FormContainer from '../Components/FormContainer';
import {Form, Button} from 'react-bootstrap'

export default function LoginScreen() {

    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const LoginUser = async () => {

        fetch('https://localhost:7214/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                    })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.token) {
                    window.localStorage.setItem('token', data.token)
                    window.localStorage.setItem('name', data.firstName + ' ' + data.lastName)
                    window.localStorage.setItem('role', data.role)
                    window.location.href = '/home'
                } 
                else
                {
                    alert("Error in login")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className="py-3 text-center">Login</h1>
            <FormContainer>

            <Form>

           <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email..." 
                        onChange={(e)=>SetEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password..."
                        onChange={(e)=>SetPassword(e.target.value)}
                    />
                </Form.Group>
                
                <Button 
                    variant="primary"
                    className="w-100"
                    onClick={LoginUser}
                >
                Login
                </Button>
            </Form>
            </FormContainer>

        </div>
    )
}

