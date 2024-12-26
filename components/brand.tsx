import { cn } from "@/lib/utils"
import Image from "next/image"

interface Props {
   invert?: boolean
   containerLabel?: string
   src?: string
   alt?: string
   width: number
   height: number
}

export default function Brand({
   invert = false,
   containerLabel = "brand-container",
   src = "/icons/brand.svg",
   alt = "brand-logo",
   width = 24,
   height = 24,
}: Props) {
   return (
      <div aria-label={containerLabel} className="relative">
         <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn({ invert: invert })}
         />
      </div>
   )
}
