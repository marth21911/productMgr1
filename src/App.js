import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import Main from './views/Main';
import Product from './views/ProductDetails';



function App() {
  return (
    <div className="App">
      <h1 className=''>Product Manager</h1>
      <Route exact path="/products">
        <Main/>
      </Route>
      <Route exact path ="/products/:id">
        <Product/>
      </Route>
    </div>
  );
}

export default App;
