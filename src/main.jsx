import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Comentarios from './Comentarios.jsx'; // Importa el componente Comentarios

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path="/comentarios" element={<Comentarios />} /> {/* Utiliza Comentarios en mayúscula */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
