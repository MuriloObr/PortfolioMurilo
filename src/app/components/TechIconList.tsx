import Image from 'next/image'
const technologies = [
  'git',
  'reactjs',
  'nextjs',
  'tailwind',
  'javascript',
  'typescript',
  'html-5',
  'css',
  'docker',
]

export function TechIconList({
  list,
  hoverEffect = false,
}: {
  list: typeof technologies
  hoverEffect?: boolean
}) {
  return (
    <ul className="flex gap-3">
      {list.map((tag) => (
        <li
          key={tag}
          className={
            hoverEffect
              ? 'opacity-80 saturate-0 hover:opacity-100 hover:saturate-100 max-sm:opacity-100 max-sm:saturate-100'
              : ''
          }
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
  )
}
