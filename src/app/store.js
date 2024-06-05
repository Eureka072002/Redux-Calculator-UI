import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from '../Features/todos/todoSlice'

export const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
})