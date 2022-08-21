import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/index.jsx';
import Intro from './components/Intro/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Intro/>
  </React.StrictMode>
);

