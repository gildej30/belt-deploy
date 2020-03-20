import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Router } from '@reach/router'; 
import Main from './views/Main';
import NewPet from './views/NewPet';
import EditPet from './views/EditPet';
import Details from './views/Details';

//remember to import axios and  @react/router for {Link}

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Pet Shelter!</h1>
        <Router>
          <Main path='/' />
          <NewPet path='/pet/new' />
          <EditPet path='/pet/:id/edit' />
          <Details path='/pet/:id' />
      </Router>
    </div>
  );
}

export default App;
