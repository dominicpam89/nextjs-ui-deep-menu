import { PropsWithChildren } from "react"
import StoreProvider from "@/lib/store/index.store"

export default function Layout({ children }: PropsWithChildren) {
   return <StoreProvider>{children}</StoreProvider>
}
