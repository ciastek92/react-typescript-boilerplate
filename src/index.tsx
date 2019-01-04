import { App } from 'app/components/app/App';
import configureStore from 'app/store/configureStore';
import { createStoreEpic } from 'app/store/store.epic';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AnyAction } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { unregister } from './registerServiceWorker';
import './styles/styles.scss';

declare global {
  interface Window {
    initialReduxState: any;
  }
}

window.initialReduxState = window.initialReduxState || {};

// Create browser history to use in the Redux store
const baseUrl =
  document.getElementsByTagName('base')[0].getAttribute('href') || undefined;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const epicMiddleware = createEpicMiddleware();
let store: any;

function dispatch(action: AnyAction) {
  store.dispatch(action);
}

store = configureStore(history, initialState, epicMiddleware);
epicMiddleware.run(createStoreEpic(dispatch));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement
);

unregister();
