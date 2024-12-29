"use client"
import { useStoreProvider } from "@/lib/store/index.store"
import MenuItem from "./menu-item"

export default function MenuComponent() {
   const { menuState } = useStoreProvider()
   return (
      <ul aria-label="menu-list" className="ml-2">
         {menuState.menus.map((menu) => {
            return <MenuItem menu={menu} key={menu.menuId} />
         })}
      </ul>
   )
}
