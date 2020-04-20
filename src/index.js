import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import { CarProvider } from './context/CarContext';
import App from 'components/App/App';
import './index.css';

const root = (
  <HttpsRedirect>
    <CarProvider>
      <App />
    </CarProvider>
  </HttpsRedirect>
);

ReactDOM.render(root, document.getElementById('root'));
