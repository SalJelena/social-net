import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restoreUser } from './store/userSlice';
import Footer from './components/Footer/Footer';

if (process.env.NODE_ENV === 'development') {
	axios.defaults.baseURL = 'http://localhost:4000/api';
} else {
axios.defaults.baseURL = 'https://selectit-social.vercel.app/api';
}

axios.interceptors.request.use((config) => {
	if (localStorage.hasOwnProperty('sm_token')) {
		config.headers.authorization = localStorage.getItem('sm_token');
	}
	return config;
});

function AppLayout() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			restoreUser(JSON.parse(localStorage.getItem('sm_user')))
		);
	}, []);

	return (
		<div className='overflow-x-hidden'>
			<Navbar />
			<Outlet />
			<Footer/>
			<ToastContainer />
		</div>
	);
}

export default AppLayout;
