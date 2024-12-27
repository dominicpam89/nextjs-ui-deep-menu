import ContentMenuChild from "./content-menu-item/child"
import ContentMenuParent from "./content-menu-item/parent"

interface ListItemProps {
   item: TypeMenu
   index: number
}
export default function ContentMenuItem({ item, index }: ListItemProps) {
   if (item.children.length == 0) {
      return <ContentMenuChild item={item} index={index} />
   } else {
      return (
         <ContentMenuParent id={item.menuId} isOpen={item.isOpen}>
            <ContentMenuChild item={item} index={index} />
            {item.children.map((it, idx) => {
               return <ContentMenuItem key={it.menuId} item={it} index={idx} />
            })}
         </ContentMenuParent>
      )
   }
}
