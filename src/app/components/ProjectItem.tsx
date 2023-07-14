import { ReactNode } from "react"
import Image from "next/image"
const technologies = [
  "git",
  "reactjs",
  "nextjs",
  "tailwind",
  "javascript",
  "typescript",
  "html-5",
  "css",
]

interface ProjectItemProps {
  tittle: string
  screensImgs: {
    desktop: string
    mobile: string
  }
  links: string[]
  tags: typeof technologies
  children: ReactNode
}

export function ProjectItem({
  tittle,
  screensImgs: { desktop, mobile },
  links,
  tags,
  children,
}: ProjectItemProps) {
  return (
    <div
      className={`w-5/6 py-5 px-12 flex flex-col items-center gap-5 border-l-2 border-primary-dark relative z-10 hover:after:w-full group/project max-sm:w-full max-sm:px-8
                after:absolute after:inset-0 after:-z-10 after:w-0 after:h-full after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-500 after:delay-100`}
    >
      <h2 className="self-start text-2xl text-defaultBlack group-hover/project:text-white">
        {tittle}
      </h2>
      <div className="relative self-start">
        <Image
          src="/desktop-screen.png"
          alt="Desktop Screen"
          height={600}
          width={600}
          className="relative z-10"
        />
        <Image
          src={desktop}
          alt="Desktop Version"
          height={600}
          width={585}
          className="absolute top-5 left-3 max-sm:top-3"
        />
        <Image
          src="/mobile-screen.png"
          alt="Mobile Screen"
          height={120}
          width={120}
          className="absolute bottom-0 -right-5 z-20"
        />
        <Image
          src={mobile}
          alt="Mobile Version"
          height={100}
          width={105}
          className="absolute bottom-0 -right-2.5 z-10 rounded-lg max-sm:-right-3 max-sm:w-[6.6rem]"
        />
      </div>
      <p className="text-justify select-none max-sm:text-defaultBlack">
        {children}
      </p>
      <ul className="self-start w-1/4 flex justify-around max-sm:w-2/4">
        {tags.map((tag) => (
          <li
            key={tag}
            className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 max-sm:saturate-100 max-sm:opacity-100"
          >
            <Image
              src={`/${tag}.svg`}
              alt="tech tag"
              height={35}
              width={35}
              className="w-full"
            />
          </li>
        ))}
      </ul>
      <div className="w-1/2 flex justify-between text-xl font-bold">
        <a
          href={links[0]}
          className="relative after:block after:absolute after:left-0 after:w-0 after:hover:w-full after:transition-all transition-all after:h-0.5 after:bg-white after:duration-300"
        >
          Repositório
        </a>
        <a
          href={links[1]}
          className="relative after:block after:absolute after:left-0 after:w-0 after:hover:w-full after:transition-all transition-all after:h-0.5 after:bg-white after:duration-300"
        >
          ↪ Visitar
        </a>
      </div>
    </div>
  )
}
