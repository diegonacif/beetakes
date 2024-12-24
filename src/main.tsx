import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import ReactPixel from 'react-facebook-pixel';

// Inicialização do Pixel
const PIXEL_ID = import.meta.env.VITE_PIXEL_ID; // Pixel ID
ReactPixel.init(PIXEL_ID);
ReactPixel.pageView(); // Registra a visualização de página inicial

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
