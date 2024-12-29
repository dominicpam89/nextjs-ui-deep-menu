import MenuList from "./menu-list"

interface Props {
   menu: TypeMenu
}
export default function MenuItem({ menu }: Props) {
   if (menu.children.length > 0) {
      return (
         <MenuList>
            <MenuItemUI menu={menu} />
            {menu.children.map((menu) => {
               return <MenuItem key={menu.menuId} menu={menu} />
            })}
         </MenuList>
      )
   } else return <MenuItemUI menu={menu} />
}

interface MenuItemUIProps {
   menu: TypeMenu
}
function MenuItemUI({ menu }: MenuItemUIProps) {
   return <li className="menu-item-ui">{menu.name}</li>
}
