import { cn } from "@/lib/utils"
import ItemIcon from "./icon"
import { useStoreProvider } from "@/lib/store/index.store"

interface Props {
   item: TypeMenu
   index: number
}

export default function ContentMenuChild({ item, index }: Props) {
   const {
      menuState: { selectedMenu },
      menuActions,
      dispatch,
   } = useStoreProvider()
   const isOddIndex = index % 2 > 0
   // in figma files, item.depth that more than 2 but less than 4 is able to be selected
   const selected = item.menuId === selectedMenu?.menuId
   // in figmal files, item depth that equals to 2, is having text-white if open
   const isWhite = item.depth == 2 && item.isOpen
   return (
      <li
         aria-label="list-item"
         id={item.menuId}
         className={cn(
            "w-full flex flex-col gap-2 rounded-2xl text-blue-gray-500 cursor-pointer",
            "border border-transparent",
            {
               "hover:bg-lime-400/20": item.depth == 3 && !selected,
            },
            {
               "bg-lime-400 text-blue-gray-900": selected,
            },
            { "text-white": isWhite }
         )}
         onClick={() => {
            if (item.depth < 3)
               dispatch(
                  menuActions.updateMenu({ ...item, isOpen: !item.isOpen })
               )
            else dispatch(menuActions.getMenu(item.menuId))
         }}
      >
         <div className="p-3 flex items-center gap-4">
            <ItemIcon
               item={item}
               depth={item.depth}
               isOddIndex={isOddIndex}
               isOpen={item.isOpen}
            />
            <span>{item.name}</span>
         </div>
      </li>
   )
}
