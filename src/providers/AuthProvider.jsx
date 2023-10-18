import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const googleLogin = () => {
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, user => {
			setLoading(false);
			setUser(user);
		});
		return () => unSubscribe();
	}, []);

	const authData = { createUser, googleLogin, logIn, user, loading, logOut };
	return (
		<AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
