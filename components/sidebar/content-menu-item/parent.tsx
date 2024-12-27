import { cn } from "@/lib/utils"

interface Props {
   readonly children: React.ReactNode
   id: string
   isOpen: boolean
}

export default function ContentMenuParent({ children, id, isOpen }: Props) {
   return (
      <ul
         aria-label="list-parent"
         id={id}
         className={cn("w-full flex flex-col gap-2 py-2", "rounded-2xl", {
            "bg-blue-gray-800": isOpen,
         })}
      >
         {children}
      </ul>
   )
}
