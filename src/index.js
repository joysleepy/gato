import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';  
import './index.css';
import Game from './components/Game'; 
import Home from './components/Home';  
import NotFound from './components/NotFound'; 


// ========================================

ReactDOM.render(
  <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="./meow">Gato</Link></li>
          <li><Link to="./home">Home</Link></li>
        </ul>
      </nav>
    <Switch>
      <Route path="/meow"><Game /></Route>
      <Route path="/home"><Home /></Route>
      <Route path="*"><NotFound /></Route>
    </Switch> 
    <nav>
      <h1>Footer</h1>
      <div>Contact information cel: 5555555555</div>
    </nav>
  </BrowserRouter>,
  document.getElementById('root')
);