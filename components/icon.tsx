"use client"
import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"

interface Props extends Omit<ImageProps, "src" | "alt"> {
   src: string
   alt?: string
   onClick?: () => void
   twClass?: string
}
export default function Icon({
   src,
   alt = "icon",
   onClick = () => {},
   twClass = "",
}: Props) {
   return (
      <button
         aria-label="btn-icon"
         className={cn("relative size-6", twClass)}
         onClick={onClick}
      >
         <Image src={src} alt={alt} fill={true} sizes="100%" />
      </button>
   )
}
