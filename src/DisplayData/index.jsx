import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './index.css'
const Displaydata = () => {
    const [productArray, setProductArray] = useState([]);

    useEffect(()=> {
        // grab data (JSON) from external server via Axios
        axios('https://dummyjson.com/products').then((response)=>{
        console.log(response);
        let arrayOfProducts = response.data.products;
        setProductArray(arrayOfProducts);
    })
    }, [])
    

    // show the name and price of each item on the screen.
  return (
    <div id='card-container'>
        {
            productArray.map((product)=>{
                return (
                    <div id='prodcut-card' key={product.id}>
                        <img src={product.images[0]} alt="" />
                        <h3>{product.brand}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                )  
            })
        }
    </div>
  )
}

export default Displaydata