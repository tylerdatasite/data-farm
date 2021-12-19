import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import App from './App';
import {
	Articles,
	BottomNav,
	CaseStudies,
	Data,
	Testing,
	TopNav,
} from './components';
import { Central, Banyan, Cypress, Neem, Wollemi } from './components';
import { Media, Books, Movies, TV } from './components';
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
		<TopNav />
		<Routes>
			<Route exact path='/' element={<App />} />
			<Route path='/articles' element={<Articles />} />
			<Route path='/case_studies' element={<CaseStudies />} />
			<Route exact path='/central' element={<Central />} />
			<Route path='/central/banyan' element={<Banyan />} />
			<Route path='/central/cypress' element={<Cypress />} />
			<Route path='/central/neem' element={<Neem />} />
			<Route path='/central/wollemi' element={<Wollemi />} />
			{/* <Route index path='/central/' element={<Central />} /> */}
			<Route exact path='/media' element={<Media />} />
			<Route path='/media/books' element={<Books />} />
			<Route path='/media/movies' element={<Movies />} />
			<Route path='/media/tv' element={<TV />} />
			<Route path='/data' element={<Data />} />
			<Route path='/testing' element={<Testing />} />
		</Routes>
		<BottomNav />
	</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
