import {createStore, combineReducers ,applyMiddleware} from "redux"


import {Reducer} from "./reducers"



import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from 'redux-persist'

import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const ThunkMiddleWare =applyMiddleware(thunk)
  
const rootReducer = combineReducers(Reducer)

const persistedReducer = persistReducer(persistConfig, rootReducer)  

export const store = createStore(persistedReducer, composeWithDevTools(ThunkMiddleWare))
 
 export const persistor = persistStore(store)