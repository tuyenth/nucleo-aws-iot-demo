import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Main from './layout/Main';
import Dashboard from './views/Dashboard';
import Magnetometer from './views/Magnetometer';
import Gyroscope from './views/Gyroscope';
import Accelerometer from './views/Accelerometer';

const RouterComponent = ({ store }) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRedirect to="/dashboard" />
                <Route path="dashboard" component={Dashboard} />
                <Route path="magnetometer" component={Magnetometer} />
                <Route path="gyroscope" component={Gyroscope} />
                <Route path="accelerometer" component={Accelerometer} />
            </Route>
        </Router>
    </Provider>
);

export default RouterComponent;
