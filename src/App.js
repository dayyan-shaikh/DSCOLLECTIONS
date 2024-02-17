import "./App.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Switch, Route} from 'react-router-dom'
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Product} />

        <Home />
      </Switch>
    </>
  );
}

export default App;
