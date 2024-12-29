"use client"
import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "lucide-react"
import { useState } from "react"

type TypeItem = {
   id: string
   name: string
   children: Array<TypeItem>
   isOpen: boolean
}

const mockList: TypeItem[] = [
   {
      id: "asd123qsad",
      name: "Parent 1",
      isOpen: false,
      children: [
         { id: "jkagsd817623", name: "Child 1", children: [], isOpen: false },
         {
            id: "alkjsdg87123",
            name: "Child 2",
            children: [
               {
                  id: "aklshd871623",
                  name: "Child 2.1",
                  children: [],
                  isOpen: false,
               },
               {
                  id: "aslkjdg18723",
                  name: "Child 2.2",
                  children: [],
                  isOpen: false,
               },
            ],
            isOpen: false,
         },
      ],
   },
   { id: "asdg18723s", name: "Parent 2", children: [], isOpen: false },
]

export default function MenuComponent2() {
   const [items, setItems] = useState(mockList)
   // Toggle function to change isOpen for the item with given id
   const toggle = (id: string) => {
      const toggleItem = (items: TypeItem[]): TypeItem[] => {
         return items.map((item) => {
            if (item.id === id) {
               // Toggle the current item
               return { ...item, isOpen: !item.isOpen }
            }
            if (item.children.length > 0) {
               // Recursively toggle children
               return { ...item, children: toggleItem(item.children) }
            }
            return item
         })
      }

      // Update the state with the new list after toggle
      setItems(toggleItem(items))
   }
   return (
      <ul className="space-y-2 ml-6">
         {items.map((item) => (
            <FirstItem key={item.id} item={item} toggle={toggle} />
         ))}
      </ul>
   )
}

function FirstItem({
   item,
   toggle,
}: {
   item: TypeItem
   toggle: (id: string) => void
}) {
   if (item.children.length > 0)
      return (
         <li className="cursor-pointer" onClick={() => toggle(item.id)}>
            <div className="flex items-center">
               <IconComp isOpen={item.isOpen} />
               <span>{item.name}</span>
            </div>
            <ul className={cn("ml-4", { hidden: !item.isOpen })}>
               {item.children.map((child) => (
                  <li key={child.id}>{child.name}</li>
               ))}
            </ul>
         </li>
      )
   else
      return (
         <li>
            <div className="flex items-center">
               <span className="w-4 h-4"></span>
               <span>{item.name}</span>
            </div>
         </li>
      )
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
