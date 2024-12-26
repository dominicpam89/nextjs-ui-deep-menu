import { PropsWithChildren } from "react"

export default function LayoutMain({ children }: PropsWithChildren) {
   return (
      <div aria-label="layout-main" className="p-6">
         {children}
      </div>
   )
}
