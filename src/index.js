import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar JS do Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar Font Awesome
import './index.css'; // Você pode ter um CSS global aqui se quiser, ou apenas em App.css
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();