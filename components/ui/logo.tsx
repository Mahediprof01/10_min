import Image from "next/image"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className = "", width = 120, height = 33 }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="10 Minute School"
        width={width}
        height={height}
        priority
        className="h-auto w-auto brightness-0 invert"
      />
    </div>
  )
}
