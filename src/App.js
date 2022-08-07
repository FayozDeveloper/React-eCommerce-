import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";
import {Route, Switch} from "react-router-dom";
import Cart from "./components/Cart";

function App() {
    return (
        <>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/Products' component={Products}/>
              <Route exact path='/Products/:id' component={Product}/>
              <Route exact path='/cart' component={Cart}/>
             </Switch>
        </>
    );
}
export default App