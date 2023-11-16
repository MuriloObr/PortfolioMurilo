/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'
import { TechIconList } from './TechIconList'

interface ProjectItemProps {
  tittle: string
  screensImgs: {
    desktop: string
    mobile: string
  }
  links: string[]
  tags: string[]
  children: ReactNode
}

export function ProjectItem({
  tittle,
  screensImgs: { desktop },
  links,
  tags,
  children,
}: ProjectItemProps) {
  return (
    <div className="group/project relative z-10 flex w-5/6 flex-col items-center gap-5 px-12 py-5 text-defaultBlack max-sm:w-full max-sm:px-8">
      <h2 className="self-start rounded-md bg-gradient-to-r from-accent/70 to-primary/70 px-4 py-2 text-3xl text-white">
        {tittle}
      </h2>
      <div className="flex gap-5 overflow-hidden rounded-md">
        <div className="w-4/5">
          <img
            src={desktop}
            alt="Desktop Version"
            height={500}
            width={500}
            className="w-full"
          />
        </div>
        <p className="w-2/3 text-justify text-xl">
          {children}
          <ul className="mt-5 w-1/2 self-start">
            <TechIconList list={tags} hoverEffect />
          </ul>
        </p>
      </div>
      <div className="flex w-1/2 justify-between text-xl font-bold">
        <a
          href={links[0]}
          className="relative transition-all after:absolute after:left-0 after:block after:h-0.5 after:w-0 after:bg-defaultBlack after:transition-all after:duration-300 after:hover:w-full"
        >
          Repositório
        </a>
        <a
          href={links[1]}
          className="relative transition-all after:absolute after:left-0 after:block after:h-0.5 after:w-0 after:bg-defaultBlack after:transition-all after:duration-300 after:hover:w-full"
        >
          ↪ Visitar
        </a>
      </div>
    </div>
  )
}
