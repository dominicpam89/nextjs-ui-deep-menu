"use client"
import { configureStore } from "@reduxjs/toolkit"
import menuReducers, { menuActions } from "./menu.store"
import { Provider, useDispatch, useSelector } from "react-redux"
import { PropsWithChildren } from "react"

export const store = configureStore({
   reducer: {
      menu: menuReducers,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default function StoreProvider({ children }: PropsWithChildren) {
   return <Provider store={store}>{children}</Provider>
}

export function useStoreProvider() {
   const dispatch = useDispatch()
   const menuState = useSelector((state: RootState) => state.menu)
   return { menuState, menuActions, dispatch }
}
