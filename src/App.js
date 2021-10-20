import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./components/product/ProductDetails";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container pt-5 mt-5">
          <Navbar />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Shop} path="/shop" exact />
            <Route component={ProductDetails} path="/shop/:id" />
            <Route component={Counter} path="/counter" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
