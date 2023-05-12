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
        <Route path='/gallery' element={<Home/>} />
        <Route path='/gallery/blog' element={<BlogMain/>} />
        <Route path='/gallery/contacts' element={<Contacts/>} />
        <Route path='/gallery/contribute' element={<Contribute/>} />
      </Routes>
    </main>
  );
}
export default Main;
