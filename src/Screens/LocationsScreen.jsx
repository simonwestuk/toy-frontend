import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import Location from '../Components/Location'
import Loader from '../Components/Loader'
import axios from 'axios'


function LocationsScreen() {

        const [locations, SetLocations] = useState([])
        const [loading, SetLoading] = useState(true)

        useEffect(()=>{

            const fetchLocations = async ()=> {

                const {data} = await axios.get('https://localhost:7214/api/locations');
                console.log(data)
                SetLocations(data)
                if (data){
                    SetLoading(false)
                }
            }

            fetchLocations()

        })

        
  return <div>
      
    <Container>
    <h1 className="py-3 text-center">Our Locations!</h1>

    {loading ? <Loader/> :(
    <Row>
         {locations.map(location => ( 
                        <Col sm={12} md={6} lg={4} className='text-center'>
                            <Location location={location}/>
                            
                        </Col>)) 
                        
        }
        
    </Row>
    )}

    </Container>


  </div>;
}

export default LocationsScreen;
