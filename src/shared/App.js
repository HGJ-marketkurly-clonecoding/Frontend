import React, { useEffect } from "react"; 
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "../pages/ProductList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useDispatch, useSelector } from "react-redux";
//import { useEffect } from "react";
import { userActions } from "../redux/modules/user";
import { ConnectedRouter } from "connected-react-router";
import history from "../redux/history";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";




function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (user) {
        dispatch(userActions.getUserAPI());
      }
    }
  }, []);

  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/product/:id" exact component={ProductDetail}></Route>
          <Route path="/cart" exact component={Cart}></Route>
        </Switch>

        <Footer />
      </ConnectedRouter>
    </>
  );
}

export default App;
