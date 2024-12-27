import Icon from "@/components/icon"
import { cn } from "@/lib/utils"

interface Props {
   depth: number
   isOpen: boolean
   isOddIndex: boolean
}

export default function ItemIcon({ depth, isOpen, isOddIndex }: Props) {
   if (depth == 2) {
      const iconFile = isOpen ? "icon-parent.svg" : "icon-parent-closed.svg"
      return (
         <Icon
            src={`/icons/${iconFile}`}
            alt="icon"
            twClass={cn("text-blue-gray-600", {
               "text-blue-gray-white": isOpen,
            })}
         />
      )
   } else {
      const iconFile = isOddIndex ? "icon-child-odd.svg" : "icon-child-even.svg"
      return <Icon src={`/icons/${iconFile}`} alt="icon" />
   }
}
