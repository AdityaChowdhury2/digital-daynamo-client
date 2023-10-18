import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, user => {
			setLoading(false);
			setUser(user);
		});
		return () => unSubscribe();
	}, []);

	const authData = { createUser, login, user, loading };
	return (
		<AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
