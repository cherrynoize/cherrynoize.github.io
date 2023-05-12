import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BlogMain from './pages/BlogMain';
import Contacts from './pages/Contacts';
import Contribute from './pages/Contribute';

/* Switch between components based on URL */
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='blog' element={<BlogMain/>} />
        <Route path='contacts' element={<Contacts/>} />
        <Route path='contribute' element={<Contribute/>} />
      </Routes>
    </main>
  );
}
export default Main;
