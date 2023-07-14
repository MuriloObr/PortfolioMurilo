import Image from "next/image"
import { ProjectItem } from "./components/ProjectItem"

const technologies = [
  "html-5",
  "css",
  "javascript",
  "typescript",
  "git",
  "nextjs",
  "reactjs",
  "tailwind",
]

export default function Home() {
  return (
    <>
      <header
        className="h-screen-d w-full bg-gradient-to-tr from-primary/80 to-accent/80 p-5"
        id="start"
      >
        <div className="flex justify-between px-5 max-sm:p-0 max-sm:flex-wrap">
          <h1 className="text-2xl font-bold select-none max-sm:w-fit max-sm:mx-auto">
            {"<Murilo/>"}
          </h1>
          <nav className="flex gap-10 text-xl max-sm:gap-5 max-sm:mx-auto">
            <a
              href="#projetos"
              className="text-slate-400 hover:text-white relative after:block after:absolute after:left-0 after:w-0 after:hover:w-full after:transition-all transition-all after:h-0.5 after:bg-white"
            >
              Projetos
            </a>
            <a
              href="#sobre"
              className="text-slate-400 hover:text-white relative after:block after:absolute after:left-0 after:w-0 after:hover:w-full after:transition-all transition-all after:h-0.5 after:bg-white"
            >
              Sobre Mim
            </a>
            <a
              href="#contato"
              className="text-slate-400 hover:text-white relative after:block after:absolute after:left-0 after:w-0 after:hover:w-full after:transition-all transition-all after:h-0.5 after:bg-white"
            >
              Contato
            </a>
          </nav>
        </div>
        <div className="h-fit w-fit absolute inset-0 my-auto mx-auto flex flex-col z-10 select-none max-sm:ml-8">
          <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-defaultBlack to-primary font-extrabold tracking-tight uppercase">
            Front-end Developer
          </span>
          <span className="text-7xl font-bold antialiased tracking-tight">
            Murilo Dressel Obregão
          </span>
        </div>
      </header>
      <div className="bg-white">
        <main className="h-fit w-full flex flex-col justify-between">
          <section
            className="h-fit w-full bg-defaultBG flex flex-col"
            id="projetos"
          >
            <h2 className="text-4xl text-defaultBlack ml-5 mt-5 select-none font-bold">
              Projetos
            </h2>
            <div className="py-10 grid grid-cols-2 justify-items-center gap-36 max-sm:grid-cols-1">
              <ProjectItem
                tittle="Twitter Clone"
                screensImgs={{
                  desktop: "/codeBG.png",
                  mobile: "/minha foto sem fundo.png",
                }}
                tags={["nextjs", "reactjs", "tailwind", "typescript"]}
                links={[
                  "https://github.com/MuriloObr/TwitterClone",
                  "/twitter",
                ]}
              >
                Criei um clone da interface do twitter, utilizando next com
                tailwind. Nesse projeto aprendi um pouco sobre ContextApi e
                algumas formas melhores de escrever o react, além de ser o
                primeiro projeto que usei typescript.
              </ProjectItem>
              <ProjectItem
                tittle="To-Do List"
                screensImgs={{
                  desktop: "/todo-list-desktop.jpg",
                  mobile: "/todo-list-mobile.jpg",
                }}
                tags={["javascript", "html-5", "css"]}
                links={[
                  "https://github.com/MuriloObr/Lista-de-Atividades-To-Do-com-JS-vanilla",
                  "https://muriloobr.github.io/Lista-de-Atividades-To-Do-com-JS-vanilla/",
                ]}
              >
                Criei uma to-do list em que o usuário pode salvar presets de
                atividades, usei o localStorage para armazenar os dados e
                treinei minha capacidade em criar código reutilizável.
              </ProjectItem>
            </div>
          </section>
          <section
            className="h-fit w-full flex flex-col items-center bg-secondary p-5"
            id="sobre"
          >
            <h2 className="text-4xl self-start select-none font-bold text-defaultBlack">
              Sobre
            </h2>
            <div className="w-3/4 mx-auto text-defaultBlack max-sm:w-11/12">
              <div className="flex justify-center items-center gap-10 max-sm:flex-col">
                <div className="border-2 border-secondary bg-secondary h-fit w-fit rounded-3xl overflow-hidden relative group/myImg">
                  <h3 className="h-fit w-fit text-5xl tracking-tighter leading-tight absolute inset-0 m-auto text-defaultBlack select-none group-hover/myImg:-z-20 transition-all duration-500 max-sm:my-5">
                    Murilo <br /> Dressel <br /> Obregão
                  </h3>
                  <Image
                    src="/minha foto sem fundo.png"
                    alt="Minha Foto"
                    width={200}
                    height={200}
                    className="opacity-0 group-hover/myImg:opacity-100 transition-all duration-500 max-sm:h-52"
                  />
                </div>
                <p className="w-3/6 text-justify text-lg max-sm:w-5/6">
                  Olá meu nome é Murilo, eu comecei na programação no 9 ano do
                  fundamental com python no curso em vídeo do mestre Gustavo
                  Guanabara, criei alguns projetos simples e depois fiquei muito
                  tempo sem praticar. Há mais ou menos 1 ano e meio voltei com a
                  intenção de seguir com web, aprendi HTML, CSS e JS e
                  atualmente utilizo bastante o Next e estou aprendendo Ruby
                  para criar o back-end com rails.
                </p>
              </div>
              <h3 className="w-fit mx-auto text-xl mb-2 tracking-widest max-sm:mt-8">
                Tecnologias que eu utilizo
              </h3>
              <ul className="w-fit mx-auto mb-5 flex gap-4">
                {technologies.map((tech) => (
                  <li key={tech}>
                    <Image
                      alt={`${tech} Image`}
                      src={`/${tech}.svg`}
                      height={50}
                      width={50}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <footer id="contato" className="bg-white p-10">
          <div className="h-fit w-fit p-8 m-auto bg-secondary rounded-lg">
            <h2 className="text-defaultBlack text-2xl font-bold mx-auto w-fit">
              Entre em contato
            </h2>
            <div className="h-16 w-fit my-2 mx-auto flex items-center justify-center gap-10">
              <a
                href="https://github.com/MuriloObr"
                className="bg-white rounded-xl p-2 invert transition-all hover:mb-2 hover:shadow-lg hover:shadow-white"
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
                className="bg-blue-600 rounded-xl p-2 transition-all hover:mb-2 hover:shadow-lg hover:shadow-blue-500"
              >
                <Image
                  src="/linkedin.svg"
                  height={35}
                  width={35}
                  alt="media icon"
                  className="invert"
                />
              </a>
              <a className="bg-white rounded-xl p-1 cursor-pointer transition-all hover:mb-2 hover:shadow-lg hover:shadow-red-500">
                <Image
                  src="/gmail.svg"
                  height={45}
                  width={45}
                  alt="media icon"
                />
              </a>
            </div>
          </div>
        </footer>
        <a
          href="#start"
          className="p-3 sticky bottom-3 left-full mr-3 rounded-md bg-primary z-50"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </>
  )
}
