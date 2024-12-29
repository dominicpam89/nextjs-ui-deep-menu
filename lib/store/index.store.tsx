"use client"
import { configureStore } from "@reduxjs/toolkit"
import { Provider, useDispatch, useSelector } from "react-redux"
import todoReducer, { actions } from "./todo.store"
import StoreMockProvider from "./index.mock"

const store = configureStore({
   reducer: {
      todos: todoReducer,
   },
})

type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch

interface Props {
   readonly children: React.ReactNode
   isMock: boolean
}

export default function ReduxProvider({ children, isMock = false }: Props) {
   if (isMock) {
      return <StoreMockProvider>{children}</StoreMockProvider>
   } else {
      return (
         <StoreMockProvider>
            <Provider store={store}>{children}</Provider>
         </StoreMockProvider>
      )
   }
}

export function useTodoRedux() {
   const todos = useSelector((state: RootState) => state.todos)
   const dispatch = useDispatch()
   const addTodo = (todo: string) => dispatch(actions.add(todo))
   const removeTodo = (id: string) => dispatch(actions.remove(id))
   const toggleTodo = (id: string) => dispatch(actions.toggle(id))
   return { todos, addTodo, removeTodo, toggleTodo }
}
