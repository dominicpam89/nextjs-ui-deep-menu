import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { generateRandomId } from "../utils"

const initialState: IntTodo[] = [
   { id: "1028973608", text: "Learn TypeScript", completed: false },
   { id: "8712693871", text: "Build a Next.js app", completed: false },
   { id: "0897162837", text: "Deploy the app", completed: false },
]

const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {
      add(state, action: PayloadAction<IntTodo["text"]>) {
         state.push({
            id: generateRandomId().toString(),
            text: action.payload,
            completed: false,
         })
      },
      remove(state, action: PayloadAction<IntTodo["id"]>) {
         return state.filter((todo) => todo.id !== action.payload)
      },
      toggle(state, action: PayloadAction<IntTodo["id"]>) {
         const todo = state.find((todo) => todo.id === action.payload)
         if (todo) {
            todo.completed = !todo.completed
         }
      },
   },
})

export const actions = todoSlice.actions
export default todoSlice.reducer
