import ItemIcon from "./icon"

interface Props {
   item: TypeMenu
   index: number
}

export default function ContentMenuChild({ item, index }: Props) {
   console.log(item.name, item.depth)
   const isOddIndex = index % 2 > 0
   return (
      <li
         aria-label="list-item"
         id={item.menuId}
         className="w-full flex flex-col gap-2"
      >
         <div className="p-3 flex items-center gap-4">
            <ItemIcon
               depth={item.depth}
               isOddIndex={isOddIndex}
               isOpen={item.isOpen}
            />
            <span>{item.name}</span>
         </div>
      </li>
   )
}
