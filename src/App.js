import React from 'react';
import { Switch,Route } from 'react-router';
import { HashRouter  } from 'react-router-dom'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Home from './components/Mainpage'
import Checkin from './components/Checkin'
import Register from './components/Register'
import listofplaces from './components/Listofplace'


function App() {

  return (
      
      <HashRouter basename= "/home">
        <Nav className="justify-content-center"  as="ul" variant="tabs" >
          <Nav.Item as="li">
            <Nav.Link to="/1">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link to="/Listofplaces/1">List of Places</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link to="/Register/1">Register</Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
        <Route exact path='/:id'  component={Home}/>
        <Route exact path='/createcheckin/:id' component={Checkin}/>
        <Route exact path='/Register/:id' component={Register}/>
        <Route exact path='/Listofplaces/:id' component={listofplaces}/>
        </Switch>
      </HashRouter>
    
  );
}

export default App;
