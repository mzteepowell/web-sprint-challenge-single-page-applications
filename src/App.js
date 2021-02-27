import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import FormData from './FormData';
import Confirmation from './Confirmation';
import Footer from './Footer';
import './App.css';


const App = () => {

  return (
    <div className='App'>
      <nav>
      <h1 className='store-header' >KHANA PIES</h1>
      <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Online</Link>
        </div>
      </nav>
    <Switch>
      <Route exact path='/pizza/confirmation'>
        <Confirmation />
      </Route>
      <Route exact path='/pizza'>
        <FormData/>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
    </Switch>
    
    <Footer/>
    </div>
  );
};
export default App;
