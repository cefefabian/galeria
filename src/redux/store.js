import { configureStore } from '@reduxjs/toolkit'
import { galeriaSlice } from './galeriaSlice'

export const store = configureStore({
  reducer: {
    galeria: galeriaSlice.reducer
  },
})