import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import axios from 'axios';
import Loader from '../Components/Loader';

function SingleProductScreen() {

    //looks at url
    const params = useParams();

    //get url id for product
    const productId = params.id

    //what we are trying to fetch
    const [product, SetProduct] = useState({});
    //manage if fetching is done yet
    const [loading, SetLoading] = useState(true);

    //run use effect on component/page load
    useEffect(()=>{
        
        //create function to call api for products
        const fetchProduct = async() =>{
            //api call
            const {data} = await axios.get(`https://localhost:7214/api/products/${productId}`)
            console.log(data)
            SetProduct(data)
            if (data){
                SetLoading(false)
            }
        }

        //Call the function
        fetchProduct()
        
    },[]);




  return <div>

    {loading? <Loader/> : (
      <Container>
        <h1>{product.name}</h1>
        <img src={product.image} alt="game"/>
        <p>{product.description}</p>
        <h2>£{product.price}</h2>
      </Container>
      )}
  </div>;
}

export default SingleProductScreen;
