import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
    
const Product = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p><Link to={"/products/" + product._id +"/edit"} > Product: {product.name}</Link></p>
            <p> $ {product.price}</p>
            <p> Description: {product.description}</p>
        </div>
    )
}
    
export default Product;

