import { ProjectItem } from './components/ProjectItem'
import { TechIconList } from './components/TechIconList'

const technologies = [
  'html-5',
  'css',
  'javascript',
  'typescript',
  'git',
  'docker',
  'nextjs',
  'reactjs',
  'tailwind',
  'python',
]

export default function Home() {
  return (
    <main className="flex h-fit w-full flex-col justify-between">
      <section
        className="flex h-fit w-full flex-col bg-defaultBG"
        id="projetos"
      >
        <h2 className="ml-5 mt-5 select-none text-4xl font-bold text-defaultBlack">
          Projetos
        </h2>
        <div className="flex flex-col justify-items-center gap-36 px-8 py-10">
          <ProjectItem
            tittle="ForUm"
            screensImgs={{
              desktop: '/forum-desktop.png',
              mobile: '/mobile',
            }}
            tags={['typescript', 'reactjs', 'tailwind', 'python', 'docker']}
            links={[
              'https://github.com/MuriloObr/ForUm_Front-End',
              'https://for-um-front-end.vercel.app/',
            ]}
          >
            Criei um fórum em que o usuário pode fazer login, postar, comentar e
            dar e remover likes, utilizando várias libs, além de utilizar python
            com flask no backend. Neste Projeto aprendi melhor sobre banco de
            dados, ORM (usei sqlalchemy) e APIs. Recentemente mudei o backend
            para um container docker para poder utilizar a ultima versão do
            Flask.
          </ProjectItem>
          <ProjectItem
            tittle="Twitter Clone"
            screensImgs={{
              desktop: '/twitter-desktop.jpg',
              mobile: '/twitter-mobile.jpg',
            }}
            tags={['nextjs', 'reactjs', 'tailwind', 'typescript']}
            links={[
              'https://github.com/MuriloObr/TwitterClone',
              'https://twitter-clone-six-lemon.vercel.app',
            ]}
          >
            Criei um clone da interface do twitter, utilizando next com
            tailwind. Nesse projeto aprendi um pouco sobre ContextApi e algumas
            formas melhores de escrever o react, além de ser o primeiro projeto
            que usei typescript.
          </ProjectItem>
          <ProjectItem
            tittle="To-Do List"
            screensImgs={{
              desktop: '/todo-list-desktop.jpg',
              mobile: '/todo-list-mobile.jpg',
            }}
            tags={['javascript', 'html-5', 'css']}
            links={[
              'https://github.com/MuriloObr/Lista-de-Atividades-To-Do-com-JS-vanilla',
              'https://muriloobr.github.io/Lista-de-Atividades-To-Do-com-JS-vanilla/',
            ]}
          >
            Criei uma to-do list em que o usuário pode salvar presets de
            atividades, usei o localStorage para armazenar os dados e treinei
            minha capacidade em criar código reutilizável.
          </ProjectItem>
        </div>
      </section>
      <section
        className="flex h-fit w-full flex-col items-center bg-secondary p-5"
        id="sobre"
      >
        <h2 className="select-none self-start text-4xl font-bold text-defaultBlack">
          Sobre
        </h2>
        <div className="mx-auto w-3/4 text-defaultBlack max-sm:w-11/12">
          <div className="flex items-center justify-center gap-10 max-sm:flex-col">
            <h3 className="mx-3 h-fit w-fit select-none text-5xl leading-tight tracking-tighter text-defaultBlack transition-all duration-500 max-sm:my-5">
              Murilo <br /> Dressel <br /> Obregão
            </h3>
            <p className="mb-5 w-3/6 text-justify text-xl max-sm:w-5/6">
              Olá meu nome é Murilo, eu comecei na programação no 9 ano do
              fundamental com python no curso em vídeo do mestre Gustavo
              Guanabara, criei alguns projetos simples e depois fiquei muito
              tempo sem praticar. Há 2 anos voltei a aprender e com isso entrei
              no mundo da web com html, css e js logo depois aprendi react e
              nextjs e utilizei meu conhecimento em python para fazer o backend.
              Atualmente estou em busca de aprender a utilizar prismaJS e nestJS
              para utilizar o próprio typescript no backend.
            </p>
          </div>
          <h3 className="mx-auto mb-2 w-fit text-xl tracking-widest max-sm:mt-8">
            Tecnologias que eu utilizo
          </h3>
          <ul className="mx-auto mb-5 flex w-2/3 gap-4">
            <TechIconList list={technologies} />
          </ul>
        </div>
      </section>
    </main>
  )
}
