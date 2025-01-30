import Image from "next/image"

export function Globe() {
  return (
    <div className="globe-container">
      <div className="globe">
        <Image
          src="/globe.png"
          alt="Globe illustration"
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  )
}

