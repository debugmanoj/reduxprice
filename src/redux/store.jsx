import { configureStore } from '@reduxjs/toolkit'
import cartInfo from './CartInfo'
export default configureStore({
  reducer: {
    Cart:cartInfo
  },
})