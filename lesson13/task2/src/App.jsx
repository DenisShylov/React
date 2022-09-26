import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <Route>
              <Link to="/">Home</Link>
            </Route>
          </li>
          <li className="navigation__item">
            <Route>
              <Link to="/products">Products</Link>
            </Route>
          </li>
        </ul>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" component={Products}></Route>
      </div>
    </BrowserRouter>
  );
};
export default App;
