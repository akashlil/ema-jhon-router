import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventrarry/Inventory";
import Success from "./components/OrderSuccess/Success";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/orders">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/successfull">
            <Success></Success>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
