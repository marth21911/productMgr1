import React from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom'

const ProductList = (props) =>{
    const {setProducts} = props;
    const history = useHistory
    const deleteProduct = (id, arrIndex) =>{ 
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => {
                // const copyState =[...props.product];
                // copyState.splice(arrIndex,1);
                // setProducts = copyState
            })
            .catch(err => console.error(err));
            history.push("/products/");
        }
    return (
        <div>
            {props.product.map((product, idx) =>
            <h5><Link key ={idx} to={`/products/${product._id}`}> {product.name}, ${product.price}</Link>
            <button onClick = {(e) => {deleteProduct(product._id, idx)}} className='btn btn-danger mx-3'>
                    Delete Product
                </button>
            </h5>
                
            )}         
        </div>
    )
}
export default ProductList;
