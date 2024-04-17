import {combineReducers, configureStore} from '@reduxjs/toolkit'
import NoteSlice from './NotesSlice/NoteSlice'
import CategorySlice from './CategorySlice/CategorySlice'
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import SettingSlice from './SettiinSlice/SettingSlice';
// import thunk  from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }
const useReducer=combineReducers({
              notes : NoteSlice,
             categories : CategorySlice,
             settings : SettingSlice
          })
const persistedReducer = persistReducer(persistConfig,useReducer )

// const store = configureStore({
//      reducer : {
//          notes : NoteSlice,
//          categories : CategorySlice
//      }
// })

// export default store

const store = configureStore({
    reducer: persistedReducer
  })
  
const persistor = persistStore(store)

export {store,persistor}