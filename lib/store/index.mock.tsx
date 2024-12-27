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

   // Helper function to toggle menu by id
   const toggleMenuById = (
      menus: TypeMenu[],
      menuId: string,
      depth: number
   ): TypeMenu[] => {
      return menus.map((menu) => {
         if (menu.depth === depth) {
            // Toggle `isOpen` for the menu matching menuId, close others at the same depth
            return {
               ...menu,
               isOpen: menu.menuId === menuId ? !menu.isOpen : false,
               children: toggleMenuById(menu.children, menuId, depth),
            }
         } else {
            // If depth doesn't match, recurse into children without modifying current menu
            return {
               ...menu,
               children: toggleMenuById(menu.children, menuId, depth),
            }
         }
      })
   }

   const findMenuDepth = (menus: TypeMenu[], menuId: string): number | null => {
      for (const menu of menus) {
         if (menu.menuId === menuId) {
            return menu.depth
         }
         const childDepth = findMenuDepth(menu.children, menuId)
         if (childDepth !== null) {
            return childDepth
         }
      }
      return null
   }

   const toggleMenu = (menuId: string) => {
      const depth = findMenuDepth(menus, menuId)
      if (depth !== null) {
         const updatedMenus = toggleMenuById(menus, menuId, depth)
         setMenus(updatedMenus)
      }
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
