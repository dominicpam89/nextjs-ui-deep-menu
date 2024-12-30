import { cn } from "@/lib/utils"

interface Props {
   readonly children: React.ReactNode
   item: TypeMenu
}

export default function ContentMenuParent({ children, item }: Props) {
   return (
      <ul
         aria-label="list-parent"
         id={item.menuId}
         className={cn(
            "w-full flex flex-col gap-2",
            "rounded-2xl",
            {
               "bg-blue-gray-800": item.isOpen,
            },
            { "py-2": item.depth <= 2 }
         )}
      >
         {children}
      </ul>
   )
}
