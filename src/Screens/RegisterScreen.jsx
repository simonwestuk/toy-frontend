import React, { useState } from 'react';
import FormContainer from '../Components/FormContainer';
import {Form, Button} from 'react-bootstrap'

export default function RegisterScreen() {

    const [fname, SetFname] = useState('')
    const [sname, SetSname] = useState('')
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const registerUser = async () => {

        fetch('https://localhost:7214/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: fname,
                    lastName: sname,
                    email: email,
                    password: password
                    })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.message === 'Registration Successful! Please Login!') {
                    window.location.href = '/login'
                } 
                else
                {
                    alert("Error in reigstration")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className="py-3 text-center">Register</h1>
            <FormContainer>

            <Form>

                <Form.Group className="mb-3" controlId="fname">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="fname" 
                        placeholder="Firstname..." 
                        onChange={(e)=>SetFname(e.target.value)}
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="sname">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="sname" 
                        placeholder="Sname..." 
                        onChange={(e)=>SetSname(e.target.value)}
                    />
                </Form.Group>

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
                    onClick={registerUser}
                >
                Register
                </Button>
            </Form>
            </FormContainer>

        </div>
    )
}

