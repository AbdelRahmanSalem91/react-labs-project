import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./components/product/ProductDetails";
import Shop from "./components/shop/Shop";
import Todo from "./views/Todo";
import Counter from "./components/Counter/Counter";

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
            <Route component={Todo} path="/todos" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
