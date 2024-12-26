import Icon from "@/components/icon"
import { cn } from "@/lib/utils"

interface Props {
   item: TypeMenu
   readonly children: React.ReactNode
}

export default function ContentMenuChild({ item, children }: Props) {
   const iconFile = item.isOpen ? "icon-parent.svg" : "icon-parent-closed.svg"
   return (
      <li aria-label="list-item" className="w-full flex flex-col gap-2">
         <div className="p-3 flex items-center gap-4">
            <Icon
               src={`/icons/${iconFile}`}
               alt="icon-parent"
               twClass={cn("text-blue-gray-600", {
                  "text-blue-gray-white": item.isOpen,
               })}
            />
            <span>{item.name}</span>
         </div>
         {children}
      </li>
   )
}
