import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"

interface Props extends ImageProps {
   invert: boolean
   containerLabel: string
}

export default function Brand({
   invert = false,
   containerLabel = "brand-container",
   src,
   alt,
   width,
   height,
   ...props
}: Props) {
   return (
      <div aria-label={containerLabel} className={cn({ invert: invert })}>
         <Image src={src} alt={alt} width={width} height={height} {...props} />
      </div>
   )
}
