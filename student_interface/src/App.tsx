import React, { Profiler } from 'react';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Sidenav from './component/Sidenav';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/profile' element={<Profile/>} ></Route>
          <Route path='/settings' element={<Settings/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;