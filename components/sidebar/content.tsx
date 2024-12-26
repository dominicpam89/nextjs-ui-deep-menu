import SidebarContentMenu from "./content-menu"

export default function SidebarContent() {
   return (
      <div
         aria-label="sidebar-content"
         className="py-[10px] pl-4 w-full h-[942px] flex flex-col gap-[98px]"
      >
         <SidebarContentMenu />
         <div aria-label="banner-promo"></div>
      </div>
   )
}
