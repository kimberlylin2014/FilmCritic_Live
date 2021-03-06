import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter} from 'react-router-dom';
// Redux
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import ScrollToTopComponent from './components/scrollToTop/scrollToTop.component';

ReactDOM.render(
  <Provider store={store}>
      <HashRouter >
        <PersistGate persistor={persistor}>
          <ScrollToTopComponent>
             <App />
          </ScrollToTopComponent>
        </PersistGate>
      </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
