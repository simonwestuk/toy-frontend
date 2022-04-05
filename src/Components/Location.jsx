import React from 'react'
import {Container, Card, Button} from 'react-bootstrap'

function Location({location}) {
    return (
        <Container className="m-2">

            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{location.address}</Card.Subtitle>
                <Card.Text>{location.postcode}</Card.Text>
                <Card.Text>{location.phone}</Card.Text>
                <Button variant="primary">View Opening Times</Button>{' '}
            </Card.Body>
            </Card>

        </Container>
    )
}

export default Location











