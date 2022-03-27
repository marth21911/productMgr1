import React, { useState , useEffect} from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);


useEffect (() =>{
    axios.get('http://localhost:8000/api/products/findAll')
        .then(res =>{
            setProduct(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
},[]);

return (
    <div>
        <ProductForm setProduct = {setProduct}/>
        <hr/>
        <ProductList product={product}/>
    </div>
    );
}
export default Main;
