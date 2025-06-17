// src/main.tsx
import React from 'react'; // ✅ Tambahkan ini

import ReactDOM from 'react-dom/client';
import App from './App'; // pastikan import App, bukan Hero langsung
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
