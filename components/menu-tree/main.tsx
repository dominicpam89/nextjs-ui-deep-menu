"use client"
import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "lucide-react"
import { useState } from "react"
import { createContext, useContext } from "react"

const mockList: TypeMenu[] = [
   {
      menuId: "asd123qsad",
      name: "Parent 1",
      isOpen: false,
      parentId: null,
      depth: 0,
      children: [
         {
            menuId: "jkagsd817623",
            name: "Child 1",
            children: [],
            isOpen: false,
            parentId: "asd123qsad",
            depth: 1,
         },
         {
            menuId: "alkjsdg87123",
            name: "Child 2",
            children: [
               {
                  menuId: "aklshd871623",
                  name: "Child 2.1",
                  children: [],
                  isOpen: false,
                  parentId: "alkjsdg87123",
                  depth: 2,
               },
               {
                  menuId: "aslkjdg18723",
                  name: "Child 2.2",
                  children: [
                     {
                        menuId: "asdlqkjwhge1027",
                        name: "Child 2.2.1",
                        children: [],
                        isOpen: false,
                        parentId: "aslkjdg18723",
                        depth: 3,
                     },
                     {
                        menuId: "asdlqkwghe8172",
                        name: "Child 2.2.2",
                        children: [],
                        isOpen: false,
                        parentId: "aslkjdg18723",
                        depth: 3,
                     },
                  ],
                  isOpen: false,
                  parentId: "alkjsdg87123",
                  depth: 2,
               },
            ],
            isOpen: false,
            parentId: "asd123qsad",
            depth: 1,
         },
      ],
   },
   {
      menuId: "asdg18723s",
      name: "Parent 2",
      children: [],
      isOpen: false,
      depth: 0,
      parentId: null,
   },
]

interface MenuContextType {
   items: TypeMenu[]
   toggle: (id: string) => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [items, setItems] = useState(mockList)

   const toggle = (id: string) => {
      const toggleItem = (items: TypeMenu[]): TypeMenu[] => {
         return items.map((item) => {
            if (item.menuId === id) {
               return { ...item, isOpen: !item.isOpen }
            }
            if (item.children.length > 0) {
               return { ...item, children: toggleItem(item.children) }
            }
            return item
         })
      }
      setItems(toggleItem(items))
   }

   return (
      <MenuContext.Provider value={{ items, toggle }}>
         {children}
      </MenuContext.Provider>
   )
}

export const useMenu = () => {
   const context = useContext(MenuContext)
   if (!context) {
      throw new Error("useMenu must be used within a MenuProvider")
   }
   return context
}
export default function MenuTreeComponent() {
   return (
      <MenuProvider>
         <RootItemList />
      </MenuProvider>
   )
}

function RootItemList() {
   const { items } = useMenu()
   return (
      <ul className="w-full space-y-2 ml-6">
         {items.map((item) => (
            <RootItem key={item.menuId} item={item} />
         ))}
      </ul>
   )
}

function RootItem({ item }: { item: TypeMenu }) {
   const { toggle } = useMenu()
   if (item.children.length > 0)
      return (
         <li className="cursor-pointer">
            <div
               className="flex items-center"
               onClick={() => toggle(item.menuId)}
            >
               <IconComp isOpen={item.isOpen} />
               <span className="ml-2">{item.name}</span>
            </div>
            <Item item={item} />
         </li>
      )
   else
      return (
         <li className="ml-2">
            <div className="flex items-center">
               <span className="w-4 h-4"></span>
               <span>{item.name}</span>
            </div>
         </li>
      )
}

interface ItemProps {
   item: TypeMenu
}
function Item({ item }: ItemProps) {
   return (
      <ParentItem isOpen={item.isOpen}>
         {item.children.map((child) => {
            return (
               <ChildItem key={child.menuId} item={child}>
                  {child.children.length > 0 && <Item item={child} />}
               </ChildItem>
            )
         })}
      </ParentItem>
   )
}

interface ParentItemProps {
   readonly children: React.ReactNode
   isOpen: boolean
}
function ParentItem({ children, isOpen }: ParentItemProps) {
   return (
      <ul
         className={cn("ml-2", {
            hidden: !isOpen,
         })}
      >
         {children}
      </ul>
   )
}

interface ChildItemProps {
   item: TypeMenu
   readonly children: React.ReactNode
}
function ChildItem({ item, children }: ChildItemProps) {
   const { toggle } = useMenu()
   if (item.children.length > 0) {
      return (
         <li aria-label="list-item" key={item.menuId} className="w-full">
            <div className="w-full flex items-end border-l border-gray-500">
               <div className="w-16 mr-2 border-b-[1px] border-gray-500"></div>
               <div
                  className="flex items-center pt-2 transform translate-y-1/4"
                  onClick={() => toggle(item.menuId)}
               >
                  <IconComp isOpen={item.isOpen} />
                  <span className="ml-2">{item.name}</span>
               </div>
            </div>
            <div className="ml-[72px] pt-2">{children}</div>
         </li>
      )
   } else {
      return (
         <li
            aria-label="list-item"
            key={item.menuId}
            className="w-full flex items-end border-l border-gray-500"
         >
            <div className="w-20 border-b-[1px] border-gray-500"></div>
            <div className="flex items-center pt-2 transform translate-y-1/4">
               <span className="w-4 h-4"></span>
               <span className="ml-0">{item.name}</span>
            </div>
         </li>
      )
   }
}

interface IconProps {
   isOpen: boolean
}
function IconComp({ isOpen }: IconProps) {
   return (
      <ChevronRightIcon
         className={cn(
            "w-4 h-4 transform transition-all duration-150 ease-in-out",
            { "rotate-90": isOpen }
         )}
      />
   )
}
