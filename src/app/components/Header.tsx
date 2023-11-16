export function Header() {
  return (
    <header
      className="h-screen-d w-full bg-gradient-to-tr from-primary/80 to-accent/80 p-5"
      id="start"
    >
      <div className="flex justify-between px-5 max-sm:flex-wrap max-sm:p-0">
        <h1 className="select-none text-2xl font-bold max-sm:mx-auto max-sm:w-fit">
          {'<Murilo/>'}
        </h1>
        <nav className="flex gap-10 text-xl max-sm:mx-auto max-sm:gap-5">
          <a
            href="#projetos"
            className="relative text-slate-400 transition-all after:absolute after:left-0 after:block after:h-0.5 after:w-0 after:bg-white after:transition-all hover:text-white after:hover:w-full"
          >
            Projetos
          </a>
          <a
            href="#sobre"
            className="relative text-slate-400 transition-all after:absolute after:left-0 after:block after:h-0.5 after:w-0 after:bg-white after:transition-all hover:text-white after:hover:w-full"
          >
            Sobre Mim
          </a>
          <a
            href="#contato"
            className="relative text-slate-400 transition-all after:absolute after:left-0 after:block after:h-0.5 after:w-0 after:bg-white after:transition-all hover:text-white after:hover:w-full"
          >
            Contato
          </a>
        </nav>
      </div>
      <div className="absolute inset-0 z-10 mx-auto my-auto flex h-fit w-fit select-none flex-col max-sm:ml-8">
        <span className="bg-gradient-to-tr from-defaultBlack to-primary bg-clip-text text-6xl font-extrabold uppercase tracking-tight text-transparent">
          FullStack Developer
        </span>
        <span className="text-7xl font-bold tracking-tight antialiased">
          Murilo Dressel Obregão
        </span>
      </div>
    </header>
  )
}
