import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex justify-center items-center h-[30vh]">
				<span className="loading loading-bars loading-lg"></span>
			</div>
		);
	}
	if (!user) {
		return <Navigate to={'/login'} state={location.pathname} />;
	}

	return <div>{children}</div>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
