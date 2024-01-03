import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import pageReducer from './features/pageSlice'
import errorpopupReducer from './features/ErrorPopupSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    page: pageReducer,
    errorpopup:errorpopupReducer,
  },
})

