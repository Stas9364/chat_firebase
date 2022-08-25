import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Login} from '../Login/Login';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Loader} from '../Loader/Loader';
import {ChatFirebase} from '../Chat/ChatFirebase';
import {auth} from '../../../firebase/firebase';

export const PATH = {
    login: '/',
    chat: '/chat'
}

export const RoutesComponent = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            <Routes>
                <Route path={PATH.login} element={<Login/>}/>
                {/*<Route path={PATH.chat} element={<Chat/>}/>*/}
                <Route path={PATH.chat} element={<ChatFirebase/>}/>
                <Route path={'/*'} element={<Navigate to={'/'}/>}/>
            </Routes>
        </>
    );
};

