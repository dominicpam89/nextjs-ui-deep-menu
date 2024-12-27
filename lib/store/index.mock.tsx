/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { createContext, useContext, useState } from "react"
import { menuMock2 } from "@/lib/data/menu.mock"

const menuMock: TypeMenu[] = menuMock2

const StoreContext = createContext({
   menus: menuMock,
   toggleMenu: (menuId: string) => {},
})

interface Props {
   readonly children: React.ReactNode
}

export default function StoreMockProvider({ children }: Props) {
   const [menus, setMenus] = useState(menuMock)
   const toggleMenu = (menuId: string) => {
      const toggleMenuState = (menus: TypeMenu[]): TypeMenu[] => {
         return menus.map((menu) => {
            if (menu.menuId == menuId) {
               return { ...menu, isOpen: !menu.isOpen }
            }
            if (menu.children) {
               return { ...menu, children: toggleMenuState(menu.children) }
            }
            return menu
         })
      }
      setMenus(toggleMenuState(menus))
   }
   return (
      <StoreContext.Provider value={{ menus, toggleMenu }}>
         {children}
      </StoreContext.Provider>
   )
}

export function useStoreMock() {
   const contextVal = useContext(StoreContext)
   return contextVal
}
