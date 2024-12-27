"use client"
import { useStoreMock } from "@/lib/store/index.mock"
import ContentMenuItem from "./content-menu-item"

export default function SidebarContentMenu() {
   const { menus } = useStoreMock()
   const displayedMenus = menus[0].children[0]
   return (
      <ul
         id="content-menu"
         className="w-full flex flex-col gap-2 text-blue-gray-white text-sm font-[700]"
      >
         {displayedMenus.children.map((item, index) => {
            return (
               <ContentMenuItem
                  key={item.menuId}
                  item={item}
                  index={index + 1}
               />
            )
         })}
      </ul>
   )
}
