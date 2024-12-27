import SidebarContent from "./content"
import SidebarHead from "./head"

export default function SidebarMain() {
   return (
      <aside
         id="sidebar"
         className="w-60 rounded-[24px] min-h-full bg-blue-gray-900"
      >
         <SidebarHead />
         <SidebarContent />
      </aside>
   )
}
