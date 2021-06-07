import React, { createContext, memo, useReducer } from 'react'

import { GlobalReducer, GLOBAL_INITIAL_STATE } from './calenderReducer';

export const GlobalContext = createContext(GLOBAL_INITIAL_STATE);

const GlobalProvider  = (props) => {
  const globalReducer = useReducer(GlobalReducer, GLOBAL_INITIAL_STATE);

  return <GlobalContext.Provider value={globalReducer}>{props.children}</GlobalContext.Provider>;
};
export default memo(GlobalProvider);


