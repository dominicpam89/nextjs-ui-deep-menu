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
   width,
   height,
}: Props) {
   return (
      <div aria-label={containerLabel}>
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
