import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import store from "./components/redux/store";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store} >
            <Route path={'/'} component={App}/>
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

