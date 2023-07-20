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
axios.defaults.baseURL = 'https://social-net-backend.vercel.app/api';
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
		<div className='overflow-x-hidden container mx-auto px-4 py-4 lg:px-0 sm:px-6 md:px-8 w-full max-w-[1370px]'>
			<Navbar />
			<Outlet />
			<Footer/>
			<ToastContainer />
		</div>
	);
}

export default AppLayout;
