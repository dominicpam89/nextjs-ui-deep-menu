import Brand from "@/components/brand"
import Icon from "@/components/icon"

export default function SidebarHead() {
   return (
      <header
         id="sidebar-head"
         className="py-[30px] px-8 w-full flex justify-between"
      >
         <Brand height={21} width={70} />
         <Icon src="/icons/menu-close.svg" />
      </header>
   )
}
