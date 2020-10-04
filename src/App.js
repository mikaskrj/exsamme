import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.scss';
import './scss_stuff/nav.scss'

import NavBar from './pages/NavBar'
import Footer from './pages/Footer'


import Forside from './pages/Forside'
import Kontakt from './pages/Kontakt'
import Produkter from './pages/Produkter'
import Produkt from './pages/Produkt'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <NavBar />
        <Route exact path="/" component={Forside} />
        <Route exact path="/kontakt" component={Kontakt} />
        <Route exact path="/produkter" component={Produkter} />
        <Route exact path="/produkter/:produktId" component={Produkt} />
        <Route exact path="/login" component={Login} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
