import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Define individual routes using the Route component */}
      <Route path="/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);