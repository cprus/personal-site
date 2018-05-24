import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import HomePage from './components/home_page';
import AboutMe from './components/about';
import ContactMe from './components/contact';
import NotFoundPage from './components/NotFoundPage';
import '../node_modules/react-fontawesome';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route path="/about" component={AboutMe} exact={true} />
          <Route path="/contact" component={ContactMe} exact={true} />
          <Route path="/" component={HomePage} exact={true} />
          <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
