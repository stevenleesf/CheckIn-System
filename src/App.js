import React from 'react';
import { Switch,Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Mainpage'
import Checkin from './components/Checkin'
import Register from './components/Register'
import listofplaces from './components/Listofplace'


function App() {

  return (
      
      <BrowserRouter basename='/1'>
        <Navbar />
        <Switch>
        <Route  path='/CheckIn-System/:id' exact component={Home}/>
        <Route  exact path='/CheckIn-System/createcheckin/:id'  component={Checkin}/>
        <Route  exact path='/CheckIn-System/Register/:id'  component={Register}/>
        <Route  exact path='/CheckIn-System/Listofplaces/:id'  component={listofplaces}/>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
