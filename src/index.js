import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import App from './App';
import { Articles, BottomNav, CaseStudies, Central, Data, Testing, TopNav } from './components';
// import { Provider } from 'react-redux';
// import store from './app/store';

ReactDOM.render(
    <BrowserRouter>
        <TopNav />
        <Routes>
            <Route exact path='/' element={<App />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/case_studies' element={<CaseStudies />} />
            <Route path='/central' element={<Central />} />
            <Route path='/data' element={<Data />} />
            <Route path='/testing' element={<Testing />} />
        </Routes>
        <BottomNav />
    </BrowserRouter>,
    document.getElementById('root')
);