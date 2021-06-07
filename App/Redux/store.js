import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer, createMigrate} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';



const migrations = {
    0: (state) => {
        return {
            ...state,
            calender: {...state.calender, markedDates: {}},
        };
    },
};
//export const GlobalContext = createContext(GLOBAL_INITIAL_STATE);
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 0,
    migrate: createMigrate(migrations, {debug: false}),
    blacklist: ['ui', 'data'],
};

 const persistedReducer = persistReducer(persistConfig, reducers);


export const store = createStore(



  persistedReducer,
  {},
  compose(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
