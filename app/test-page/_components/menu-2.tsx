"use client"
import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "lucide-react"
import { PropsWithChildren } from "react"

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
   return (
      <ul className="space-y-2 ml-6">
         {mockList.map((item) => (
            <MenuItem key={item.id} item={item} />
         ))}
      </ul>
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

function ItemParent({ children }: PropsWithChildren) {
   return <ul className="ml-2 mt-1 border-l border-gray-300">{children}</ul>
}

function ItemSummary({ item }: { item: TypeItem }) {
   return (
      <summary className="cursor-pointer flex items-center text-gray-700 hover:text-blue-600">
         {item.children.length > 0 && <IconComp isOpen={item.isOpen} />}
         <span className="ml-2 font-medium">{item.name}</span>
      </summary>
   )
}

// Recursive MenuItem Component
function MenuItem({ item }: { item: TypeItem }) {
   return (
      <li>
         <details className="group">
            <ItemSummary item={item} />
            {item.children.length > 0 && (
               <ItemParent>
                  {item.children.map((child) => (
                     <MenuItem key={child.id} item={child} />
                  ))}
               </ItemParent>
            )}
         </details>
      </li>
   )
}
