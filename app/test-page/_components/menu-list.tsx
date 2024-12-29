import { PropsWithChildren } from "react"

export default function MenuList({ children }: PropsWithChildren) {
   return (
      <ul aria-label="menu-list" className="menu-list">
         {children}
      </ul>
   )
}
