"use client"
import { cn } from "@/lib/utils"

type Size = "sm" | "md" | "lg" | "xl" | "xxl"
type Weight = "normal" | "medium" | "semi" | "bold"

const sizeMap: Record<Size, string> = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-6xl",
  xxl: "text-7xl",
}

const weightMap: Record<Weight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semi: "font-semibold",
  bold: "font-extrabold",
}

export function TextGif({
  gifUrl,
  text,
  size = "xl",
  weight = "bold",
  className,
}: {
  gifUrl: string
  text: string
  size?: Size
  weight?: Weight
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-block leading-none bg-clip-text text-transparent",
        sizeMap[size],
        weightMap[weight],
        "select-none",
        className
      )}
      style={{
        backgroundImage: `url(${gifUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundClip: "text",
      }}
    >
      {text}
    </span>
  )
}
