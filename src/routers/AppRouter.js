import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { container } from 'reactstrap';
import Header from '../components/Header';
import DashBoardPage from '../components/DashBoardPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container card text-center">
        <Header />
        <Switch>
          <Route path="/" component={DashBoardPage} exact={true}/>
        </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
