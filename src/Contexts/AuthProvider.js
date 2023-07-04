import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from "../Config/firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const gitHubProvider = new GithubAuthProvider();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const authUser = "Mimo";

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    const authInfo = {
        authUser,
        googleSignIn,
        gitHubSignIn
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};



export default AuthProvider;