import { cn } from "@/lib/utils"

interface Props {
   readonly children: React.ReactNode
   id: string
   isOpen: boolean
   depth: number
}

export default function ContentMenuParent({
   children,
   id,
   isOpen,
   depth,
}: Props) {
   return (
      <ul
         aria-label="list-parent"
         id={id}
         className={cn(
            "w-full flex flex-col gap-2",
            "rounded-2xl",
            {
               "bg-blue-gray-800": isOpen,
            },
            { "py-2": depth <= 2 }
         )}
      >
         {children}
      </ul>
   )
}
