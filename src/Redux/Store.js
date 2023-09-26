import { configureStore } from '@reduxjs/toolkit'
import destinationReducer from './Reducer'

export default configureStore({
  reducer: {
    location : destinationReducer,
  },
})