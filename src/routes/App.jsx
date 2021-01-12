import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Checkout from '../components/Checkout';
import Information from '../components/Information';
import Payment from '../components/Payment';
import Success from '../components/Success';
import NotFound from '../components/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/checkout/information' component={Information} />
        <Route exact path='/checkout/payment' component={Payment} />
        <Route exact path='/checkout/sucess' component={Success} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;