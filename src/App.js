import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Shop} path="/shop" />
            <Route component={Counter} path="/counter" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
