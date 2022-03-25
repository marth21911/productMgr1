import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const ProductList = (props) =>{
    const {removeFromDom} = props;

    const deleteProduct = (id) =>{
        axios.delete('http://localhost:800/api/products/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {props.product.map((product, idx) =>
            <h5><Link key ={idx} to={`/products/${product._id}`}> {product.name}, ${product.price}</Link><button onClick = {(e) => {deleteProduct(product._id)}} className='btn btn-danger mx-3'> Delete Product</button></h5>,
                
            )}         
        </div>
    )
}
export default ProductList;
