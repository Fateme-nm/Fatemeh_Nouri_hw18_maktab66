import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoggedInUsersContextProvider from './contexts/LoggedInUsersContext';

ReactDOM.render(
  <React.StrictMode>
    <LoggedInUsersContextProvider>
      <App />
    </LoggedInUsersContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
