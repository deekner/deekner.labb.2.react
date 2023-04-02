import React from 'react';
import { HomeComponent } from './components/HomeComponents';
import { NavbarComponent } from './components/NavbarComponent';
import { ResumeComponent } from './components/ResumeComponent';
import { AboutComponent } from './components/AboutComponent';
import { ContactComponent } from './components/ContactComponent';
import { PortfolioComponent } from './components/PortfolioComponent';
import './App.css';
import { BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <HashRouter>
      <NavbarComponent/>
        <Routes>
          <Route path="/" element={ <HomeComponent/> }/>
          <Route path='/about' element={ <AboutComponent/>}/>
          <Route path='/portfolio' element={<PortfolioComponent/>}/>
          <Route path="/resume" element={ <ResumeComponent/> }/>
          <Route path="/contact" element={ <ContactComponent/> }/>
        </Routes>
    </HashRouter>
  );
}

