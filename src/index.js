import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import HomePage from './components/home_page';
import AboutMe from './components/about';
import ContactMe from './components/contact';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route path="/about" component={AboutMe} />
          <Route path="/contact" component={ContactMe} />
          <Route path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
