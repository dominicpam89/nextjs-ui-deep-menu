import { PropsWithChildren } from "react"
import SidebarMain from "@/components/sidebar/main"

export default function LayoutMain({ children }: PropsWithChildren) {
   return (
      <div aria-label="layout-main" className="p-6 flex min-h-screen">
         <SidebarMain />
         <main>{children}</main>
      </div>
   )
}
