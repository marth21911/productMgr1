import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const ProductList = (props) =>{
    const {removeFromDom} = props;

    const deleteProduct = (productID) =>{
        axios.delete('http://localhost:800/api/products/' + productID)
            .then(res => {
                removeFromDom(productID)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {props.products.map((product, idx) =>{
                return <p key={idx}>
                    <Link to= {"/" + product._id}>
                        {product.name}, {product.price}, {product.description}
                    </Link>
                    <button onClick = {(e) => {deleteProduct(product._id)}}>
                        Delete Product
                    </button>
                </p>
            })}
        </div>
    )
}
export default ProductList;