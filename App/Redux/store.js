import React, { memo, createContext, useReducer } from 'react';

import { GlobalReducer, GLOBAL_INITIAL_STATE } from './reducers/calenderReducer';
import {authReducer,AUTH_INITIAL_STATE} from './reducers/authReducer';


export const GlobalContext = createContext(GLOBAL_INITIAL_STATE);
export const AuthContext  = createContext(AUTH_INITIAL_STATE);

const Store = (props) => {
    const globalReducer = useReducer(GlobalReducer, GLOBAL_INITIAL_STATE);
    const  authReducer =useReducer(authReducer,AUTH_INITIAL_STATE);

    return <GlobalContext.Provider value={globalReducer}>{props.children}</GlobalContext.Provider>;
    return <AuthContext.Provider value={authReducer}>{props.children}</AuthContext.Provider>;
};

export default memo(Store);
