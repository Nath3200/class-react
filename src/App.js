import React from 'react';
import './App.css';
import Cv from './pages/Cv/Cv';
import { Routes, Route } from 'react-router-dom';
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Counter from './components/Counter/Counter';
import Projet from './pages/Projet/Projet';
import List from './components/List/List';
import Toogle from './components/Toogle/Toogle';
import Metier from './components/Metier/Metier';
import Articles from './pages/Articles/Articles';
import UseEffectCompo from './pages/UseEffectCompo/UseEffectCompo';
import SetIntervalCompo from './pages/SetIntervalCompo/SetIntervalCompo';
import MouseMoove from './pages/MouseMoove/MouseMoove';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route index element={<Projet />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/list" element={<List />} />
        <Route path="/Toogle" element={<Toogle />} />
        <Route path="/Metier" element={<Metier />} />
        <Route path="/article/:id" element={<Articles />} />
        <Route path="/Projet" element={<Projet />} />
        <Route path="/UseEffectCompo" element={<UseEffectCompo />} />
        <Route path="/SetIntervalCompo" element={<SetIntervalCompo />} />
        <Route path="/MouseMoove" element={<MouseMoove />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    );
  }
}

export default App;