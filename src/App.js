import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventrarry/Inventory";
import Success from "./components/OrderSuccess/Success";
import Login from "./components/Login/Login";
import AuthContext from "./Context/AuthContext";
import PriveateRoute from "./components/PriveateRoute/PriveateRoute";

function App() {
  return (
    <AuthContext>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/orders">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PriveateRoute path="/successfull">
            <Success></Success>
          </PriveateRoute>
        </Switch>
      </Router>
    </AuthContext>
  );
}

export default App;
