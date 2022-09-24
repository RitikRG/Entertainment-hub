import React from "react";
import {Routes, Route} from 'react-router-dom';
import axios from 'axios'
import { ExternalLink } from 'react-external-link';

import Home from "./components/Home";
import Trendingpage from './Routes/Trendingpage';
import Moviespage from './Routes/Moviespage';
import Tvseriespage from "./Routes/Tvseriespage";
import Searchpage from "./Routes/Searchpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trendingpage/>}/>
        <Route path="/movies" element={<Moviespage/>}/>
        <Route path="/tvseries" element={<Tvseriespage/>}/>
        <Route path="/search" element={<Searchpage/>}/>
      </Routes>
    </>
  );
}

export default App;
