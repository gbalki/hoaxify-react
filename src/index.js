import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap-override.scss';
import UserSignupPage from './pages/UserSignupPage';
import LoginPage from './pages/LoginPage';
import reportWebVitals from './reportWebVitals';
import './i18n';
import LanguageSelector from './companents/LanguageSelector';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <React.StrictMode>
    <LoginPage />
    <LanguageSelector />
  </React.StrictMode>

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
