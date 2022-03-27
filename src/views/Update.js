import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useHistory } from 'react-router-dom';

    // const {initialProductName, initialPrice, initialDescription, onSubmitProp} = props;
    
const Update = (props) => {
    const history = useHistory();
    const {id} = useParams ();
    const [price, setPrice] = useState ("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setName(res.data.name);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            name,
            price,
            description
        })
            .then(res =>console.log(res))
            .catch(err =>console.log(err))
        // onSubmitProp({productName, price, description});
        history.push("/products");
    }
    return(
        
        <form onSubmit= {updateProduct}>
            <div className="form-group">
                <label for="product">Product Name</label>
                    <input  onChange={(e) => { setName(e.target.value)}} name= "product" type="text" className="form-control" value={name} placeholder="Product Name"/>
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
export default Update