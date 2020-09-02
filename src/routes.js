import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Task from './pages/Tasks';

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Task} />
        </Switch>
      </BrowserRouter>
    );
  }