import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Portfolio } from './views/Portfolio';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Doggo from './views/Portfolio/Works/Doggo';
import LetsChat from './views/Portfolio/Works/LetsChat';


export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Footer />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/doggo" component={Doggo} />
        <Route exact path="/lets-chat" component={LetsChat} />
      </Switch>
    </div>
  );
};
