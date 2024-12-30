import Icon from "@/components/icon"
import { cn } from "@/lib/utils"
import SVGIconOdd from "@/components/sidebar/icon-svg/icon-svg-odd"
import SVGIconEven from "@/components/sidebar/icon-svg/icon-svg-even"
import { useStoreProvider } from "@/lib/store/index.store"

interface Props {
   item: TypeMenu
   depth: number
   isOpen: boolean
   isOddIndex: boolean
}

export default function ItemIcon({ item, depth, isOpen, isOddIndex }: Props) {
   const {
      menuState: { selectedMenu },
   } = useStoreProvider()
   // in figma file, any menu that is having depth==2 is having folder icon
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
   }
   // while depth>2 is having folder icon odd or even
   else {
      const isSelected = selectedMenu?.menuId === item.menuId
      if (isOddIndex)
         return (
            <SVGIconOdd
               className={cn("stroke-blue-gray-500 fill-none", {
                  "fill-blue-gray-900": isSelected,
               })}
            />
         )
      if (!isOddIndex) {
         return (
            <SVGIconEven
               className={cn("fill-blue-gray-500", {
                  "fill-blue-gray-900": isSelected,
               })}
            />
         )
      }
   }
}
