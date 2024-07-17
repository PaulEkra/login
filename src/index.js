import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './login/login';
import { Auth } from './Auth/auth';
import { Home } from './accueil/accueil';
import { PageNotFound } from './pageNotFound/pageNotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<App/>}>
   <Route path="/" element={<Login/>}/>
   <Route path="/auth" element={<Auth/>}/>
   <Route path="/home" element={<Home/>}/>
   <Route path="*" element={<PageNotFound/>}/>
   </Route>
  </Routes>
  </BrowserRouter>
);


