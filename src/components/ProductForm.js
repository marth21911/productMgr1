import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default props =>{
    // const {initialProductName, initialPrice, initialDescription, onSubmitProp} = props;
    const [name, setProductName] = useState ("");
    const [price, setPrice] = useState ("");
    const [description, setDescription] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/create', {
            name,
            price,
            description
        })
            .then(res =>console.log(res))
            .catch(err =>console.log(err))
        // onSubmitProp({productName, price, description});
    }
    return(
        <form onSubmit= {onSubmitHandler}>
            <div className="form-group">
                <label for="product">Product Name</label>
                    <input  onChange={(e) => { setProductName(e.target.value)}} name= "product" type="text" className="form-control" value={name} placeholder="Product Name"/>
            </div>
            <div className="form-group">
                <label for="price">Price</label>
                    <input  onChange={(e) => { setPrice(e.target.value) }} name= "price" type="number" className="form-control" value={price} placeholder="Price"/>
            </div>
            <div className="form-group">
                <label for="description">Description</label>
                    <input  onChange={(e) => { setDescription(e.target.value)}} value={description} type="text" className="form-control" placeholder='description' name="description"/>
            </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}