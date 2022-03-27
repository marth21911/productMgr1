import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import Main from './views/Main';
import Product from './views/ProductDetails';
import Update from './views/Update';



function App() {
  return (
    <div className="App">
      <Link to="/products"><h1 className=''>Product Manager</h1></Link>
      <Route exact path="/products">
        <Main/>
      </Route>
      <Route exact path ="/products/:id">
        <Product/>
      </Route>
      <Route exact path ="/products/:id/edit">
        <Update/>
      </Route>
    </div>
  );
}

export default App;
