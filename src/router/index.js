import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Album, Home, NotFound } from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
