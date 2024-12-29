import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { menuMock1 } from "@/lib/data/menu.mock"

interface InitialState {
   menus: TypeMenu[]
   selectedMenu: TypeMenu | null
}

const initialState: InitialState = {
   menus: menuMock1,
   selectedMenu: null,
}

const findMenu = (
   menus: TypeMenu[],
   payload: TypeMenu["menuId"]
): TypeMenu | undefined => {
   return menus.find((menu) => {
      if (menu.menuId == payload) {
         return menu
      }
      if (menu.children && menu.children.length > 0) {
         const found = findMenu(menu.children, payload)
         if (found) return found
      }
   })
}

const addMenu = (
   menus: TypeMenu[],
   newMenu: TypeMenu,
   parentId?: TypeMenu["menuId"]
): TypeMenu[] => {
   if (!parentId) {
      return [...menus, newMenu]
   }
   return menus.map((menu) => {
      if (menu.menuId === parentId) {
         return {
            ...menu,
            children: menu.children ? [...menu.children, newMenu] : [newMenu],
         }
      }
      if (menu.children) {
         return {
            ...menu,
            children: addMenu(menu.children, newMenu, parentId),
         }
      }
      return menu
   })
}

const deleteMenu = (
   menus: TypeMenu[],
   menuId: TypeMenu["menuId"]
): TypeMenu[] => {
   return menus
      .filter((menu) => menu.menuId !== menuId)
      .map((menu) => {
         if (menu.children) {
            return {
               ...menu,
               children: deleteMenu(menu.children, menuId),
            }
         }
         return menu
      })
}

const updateMenu = (menus: TypeMenu[], updatedMenu: TypeMenu): TypeMenu[] => {
   return menus.map((menu) => {
      if (menu.menuId === updatedMenu.menuId) {
         return updatedMenu
      }
      if (menu.children) {
         return {
            ...menu,
            children: updateMenu(menu.children, updatedMenu),
         }
      }
      return menu
   })
}

const menuSlice = createSlice({
   name: "menu",
   initialState,
   reducers: {
      getMenu(state, action: PayloadAction<TypeMenu["menuId"]>) {
         const menu = findMenu(state.menus, action.payload)
         if (menu) state.selectedMenu = menu
         else state.selectedMenu = null
      },
      addMenu(
         state,
         action: PayloadAction<{
            newMenu: TypeMenu
            parentId?: TypeMenu["menuId"]
         }>
      ) {
         state.menus = addMenu(
            state.menus,
            action.payload.newMenu,
            action.payload.parentId
         )
      },
      deleteMenu(state, action: PayloadAction<TypeMenu["menuId"]>) {
         state.menus = deleteMenu(state.menus, action.payload)
      },
      updateMenu(state, action: PayloadAction<TypeMenu>) {
         state.menus = updateMenu(state.menus, action.payload)
      },
   },
})

export const menuActions = menuSlice.actions
export default menuSlice.reducer
