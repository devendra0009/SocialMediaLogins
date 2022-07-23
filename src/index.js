import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-vmwlzeyqk6g9.frontegg.com',
  clientId: '0c3150c0-51f6-4045-a533-a8eb58da3eb1'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
  <App/>
</FronteggProvider>,
);
