import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components"
import {
  Cart,
  About,
  Error,
  Home,
  SingleProduct,
  Products,
  AuthWrapper,
  Completed
} from "./pages";
const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
            <Footer />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/products/:id" exact children={<SingleProduct />} />
          <Route path="/completed" exact>
            <Completed />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  )
}
export default App;