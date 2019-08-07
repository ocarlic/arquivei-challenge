import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';
import ComprarConsultas from '../ComprarConsultas/ComprarConsultas';
import PageNotFound from '../Page-404/Page-404';
import Sidebar from '../../components/Sidebar/Sidebar';

class Main extends PureComponent {
  componentDidMount() {
    if (localStorage.getItem('email') === 'false') {
      this.Logged();
    }
  }

  Logged = () => <Redirect to="/login" />;

  Loggout = () => {
    localStorage.setItem('email', false);
    localStorage.setItem('password', false);
  };

  render() {
    return (
      <>
        <Navbar Loggout={this.Loggout} />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/comprar-consultas" component={ComprarConsultas} />
                <Route component={PageNotFound} />
              </Switch>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
