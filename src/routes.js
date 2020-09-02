import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Tasklist from './pages/Tasklist';
import Config from './pages/Config';

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Tasklist" component={Tasklist} />
          <Route path="/Config" component={Config} />
        </Switch>
      </BrowserRouter>
    );
  }