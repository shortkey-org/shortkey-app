import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UIProvider } from './contexts/UICtx';
import { AuthProvider } from './contexts/AuthCtx';
import { BrowserRouter } from 'react-router-dom';

import "./styles/index.scss";
import SkProvider from './contexts/SkCtx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <HelmetProvider>
    <CookiesProvider>
      <BrowserRouter>
        <UIProvider>
          <AuthProvider>
            <SkProvider>
              <App />
            </SkProvider>
          </AuthProvider>
        </UIProvider>
      </BrowserRouter>
    </CookiesProvider>
  </HelmetProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
