import { createBrowserRouter } from 'react-router-dom';
import Root from '../MainLayout/Root';
import Home from '../pages/Home/Home';
import ErrorElement from '../components/ErrorElement/ErrorElement';
import Cart from '../pages/Cart/Cart';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import BrandPage from '../pages/BrandPage/BrandPage';
import AddProduct from '../pages/AddProduct/AddProduct';
import UpdateProduct from '../pages/UpdateProduct/UpdateProduct';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Profile from '../pages/Profile/Profile';

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
				path: '/addProduct',
				element: (
					<PrivateRoute>
						<AddProduct />
					</PrivateRoute>
				),
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
				path: '/profile/:email',
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
			},
			{
				path: '/brands/:brand',
				element: <BrandPage />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/api/v1/get-product/${params.brand}`),
			},
			{
				path: '/updateProduct/:productId',
				element: (
					<PrivateRoute>
						<UpdateProduct />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/api/v1/products/${params.productId}`),
			},
			{
				path: '/product/:productId',
				element: (
					<PrivateRoute>
						<ProductDetails />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/api/v1/products/${params.productId}`),
			},
		],
	},
]);

export default Router;
