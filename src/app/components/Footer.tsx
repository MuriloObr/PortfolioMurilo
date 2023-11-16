import Image from 'next/image'

export function Footer() {
  return (
    <footer id="contato" className="bg-white p-10">
      <div className="m-auto h-fit w-fit rounded-lg bg-secondary p-8">
        <h2 className="mx-auto w-fit text-2xl font-bold text-defaultBlack">
          Entre em contato
        </h2>
        <div className="mx-auto my-2 flex h-16 w-fit items-center justify-center gap-10">
          <a
            href="https://github.com/MuriloObr"
            className="rounded-xl bg-white p-2 invert transition-all hover:mb-2 hover:shadow-lg hover:shadow-white"
          >
            <Image
              src="/githubIcon.svg"
              height={35}
              width={35}
              alt="media icon"
            />
          </a>
          <a
            href="https://linkedin.com/in/murilo-obregão/"
            className="rounded-xl bg-blue-600 p-2 transition-all hover:mb-2 hover:shadow-lg hover:shadow-blue-500"
          >
            <Image
              src="/linkedin.svg"
              height={35}
              width={35}
              alt="media icon"
              className="invert"
            />
          </a>
          <a className="cursor-pointer rounded-xl bg-white p-1 transition-all hover:mb-2 hover:shadow-lg hover:shadow-red-500">
            <Image src="/gmail.svg" height={45} width={45} alt="media icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}
