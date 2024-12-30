import ContentMenuChild from "./content-menu-item/child"
import ContentMenuParent from "./content-menu-item/parent"

interface ListItemProps {
   item: TypeMenu
   index: number
}
export default function ContentMenuItem({ item, index }: ListItemProps) {
   // i don't see that figma file shows that item more than depth of 3 is shown
   if (item.depth > 3) return null

   // if no children then it is just simply list item <li>
   if (item.children.length == 0) {
      return <ContentMenuChild item={item} index={index} />
   }

   // if there's children then recursive function is called , which is the this component function itself
   else
      return (
         <ContentMenuParent item={item}>
            <ContentMenuChild item={item} index={index} />
            {item.isOpen &&
               item.children.map((it, idx) => {
                  return (
                     <ContentMenuItem
                        key={it.menuId}
                        item={it}
                        index={idx + 1}
                     />
                  )
               })}
         </ContentMenuParent>
      )
}
