import { configureStore } from '@reduxjs/toolkit'
import clickReducer from "../redux/clickSlice"

export default configureStore({
  reducer: {
      click : clickReducer,
  },
})