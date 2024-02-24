import "./App.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Switch, Route} from 'react-router-dom'
import Product from "./components/Product";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Login from "./components/Login"
import Register from "./components/Register";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <Switch>
        <Route exact  path="/" ><Home/></Route>
        <Route exact  path="/product"> <Product/> </Route>
        <Route  exact path="/products/:id" > <Products/> </Route>
        <Route exact  path="/contact"> <Contact/></Route>
        <Route exact  path="/login"> <Login/></Route>
        <Route exact  path="/register"> <Register/></Route>

      </Switch>
      <Footer />
     

      
    </>
  );
}

export default App;
