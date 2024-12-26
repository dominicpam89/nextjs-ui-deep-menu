"use client"
import { useStoreMock } from "@/lib/store/index.mock"
import ContentMenuChild from "./content-menu/child"

export default function SidebarContentMenu() {
   const { menus } = useStoreMock()
   const displayedMenus = menus[0].children[0]
   return (
      <ul
         aria-label="content-menu"
         className="w-full flex flex-col gap-2 text-blue-gray-white"
      >
         {displayedMenus.children.map((item) => {
            return (
               <ContentMenuChild key={item.menuId} item={item}>
                  <p>Some children if needed</p>
               </ContentMenuChild>
            )
         })}
      </ul>
   )
}
