import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducer/app.slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})