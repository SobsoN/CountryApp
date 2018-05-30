import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import {getCountries} from './actions/actions';


render(
    <Provider store={store}>
        <div>
            <h1>Inicjalizcja projektu</h1>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);
store.dispatch(getCountries());