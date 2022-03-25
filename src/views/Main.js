import React, { useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
    // const [product, setProduct] = useState([]);
    // const [loaded, setLoaded] = useState(false);


// useEffect (() =>{
//     axios.get('http://localhost:8000/api/products')
//         .then(res =>{
//             setProduct(res.data);
//             setLoaded(true);
//         })
//         .catch(err => console.error(err));
// },[]);
// const removeFromDom = productID => {
//     setProduct(product.filter(product => product._id != productID));
// }

return (
    <div>
        <ProductForm/>
        {/* <hr/>
        {loaded && <ProductList product={product} removeFromDom = {removeFromDom}/>} */}
    </div>
    );
}
export default Main;