import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Rates from './components/pages/Rates';
import FAQ from './components/pages/FAQ';
import Testimonials from './components/pages/Testimonials';
import Treatments from './components/pages/Treatments';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/faq' exact component={FAQ} />
          {/* <Route path='/rates' exact component={Rates} />
          <Route path='/testimonials' exact component={Testimonials} /> */}
          <Route path='/treatments' exact component={Treatments} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
