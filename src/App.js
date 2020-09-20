import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home/index';
import Projects from './pages/Projects/index';
import Footer from './components/Footer/index';
import NotFound from './pages/NotFound/index';
import './global.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route element={<NotFound />} />
          {/* https://tylermcginnis.com/react-router-pass-props-to-components/ */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
