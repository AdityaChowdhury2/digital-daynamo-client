import { createBrowserRouter } from 'react-router-dom';
import Root from '../MainLayout/Root';
import Home from '../pages/Home/Home';
import ErrorElement from '../components/ErrorElement/ErrorElement';
import Cart from '../pages/Cart/Cart';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import BrandPage from '../pages/BrandPage/BrandPage';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorElement />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/cart',
				element: (
					<PrivateRoute>
						<Cart />
					</PrivateRoute>
				),
			},
			{
				path: '/brands/:brand',
				element: (
					<PrivateRoute>
						<BrandPage />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://127.0.0.1:5000/api/brands/${params.brand}`),
			},
		],
	},
]);

export default Router;
