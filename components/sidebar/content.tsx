import SidebarContentMenu from "./content-menu"

export default function SidebarContent() {
   return (
      <div
         id="sidebar-content"
         className="py-[10px] px-4 w-full h-[942px] flex flex-col gap-[98px]"
      >
         <SidebarContentMenu />
         <div id="banner-promo"></div>
      </div>
   )
}
