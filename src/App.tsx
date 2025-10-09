import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'André Pereira - Portfólio';
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[420px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="md:sticky md:top-0 md:h-screen md:self-start overflow-hidden bg-black flex flex-col w-full">
          <div className="relative w-full h-[65vh] md:h-[90vh]">
            <img
              src="/andre.jpg"
              alt="Foto de André Pereira"
              className="absolute inset-0 h-full w-full object-cover object-[center_45%] md:object-[center_45%] lg:object-[center_45%]"
            />
          </div>

          <div className="flex-1 bg-zinc-900 px-8 py-8 flex flex-col justify-between">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-extrabold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                André Martins Pereira
              </h1>
              <p className="mt-2 text-lg text-zinc-300">Desenvolvedor Backend</p>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4">
              <a
                href="https://github.com/AndrePereira03"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.77-1.63-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.64.24 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.82 5.66-5.5 5.96.43.37.82 1.11.82 2.25v3.34c0 .32.21.69.83.57A12 12 0 0 0 12 .5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/devandrepereira/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.84v2.11h.05c.53-1 1.84-2.11 3.79-2.11 4.05 0 4.8 2.67 4.8 6.15V24h-4v-7.14c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77V24h-3.98V8.5z" />
                </svg>
              </a>

              <a
                href="http://lattes.cnpq.br/1206826904930873"
                target="_blank"
                rel="noreferrer"
                aria-label="Lattes"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 3.2a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zM12 13.6c-3.2 0-6.4 1.6-6.4 4v1.2h12.8V17.6c0-2.4-3.2-4-6.4-4z" />
                </svg>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="px-6 py-12 md:px-14 flex justify-center">
          <section className="w-full max-w-[100ch] space-y-40">
            {/* SOBRE */}
            <section id="sobre" className="space-y-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Sobre mim
              </h2>
              <p className="text-[1.2rem] md:text-[1.35rem] leading-relaxed text-zinc-300 text-justify">
                Graduando em Ciência da Computação pela UFJF, bolsista do GETCOMP,
                com experiência em pesquisa aplicada em Inteligência Artificial e Deep Learning,
                especialmente em Redes Neurais Convolucionais para reconhecimento de imagens.
                Minha trajetória é marcada por conquistas em competições acadêmicas e de programação,
                incluindo medalhas em Olimpíadas de Matemática e na Maratona de Programação da SEMCOMP.
                Na UFJF, já ministrei minicursos de git/github, algoritmos I e II e monitorias.
                Busco aplicar minha base sólida em algoritmos, bancos de dados e desenvolvimento backend
                no mercado de tecnologia.
              </p>
            </section>

            {/* TECNOLOGIAS */}
            <section id="tecnologias" className="space-y-14">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Tecnologias
              </h2>
              <ul className="flex flex-wrap justify-center gap-3">
                {[
                  'C++', 'Java', 'JavaScript', 'TypeScript', 'Python',
                  'HTML', 'CSS', 'MySQL', 'PostgreSQL', 'Flask'
                ].map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-base"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            {/* EXPERIÊNCIA */}
            <section id="experiencia" className="space-y-14">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Experiência
              </h2>
              <ol className="relative border-l border-zinc-800 pl-6 space-y-14 text-left mx-auto w-fit">
                <li className="relative">
                  <span className="absolute -left-[10px] top-1 inline-block h-2.5 w-2.5 rounded-full bg-zinc-400"></span>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Bolsista GETCOMP - UFJF
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">2 anos</p>
                  <p className="mt-4 text-[1.15rem] leading-relaxed text-zinc-300 text-justify">
                    Ministrei aulões de Algoritmos I e II, e git/github para estudantes da UFJF.
                  </p>
                </li>

                <li className="relative">
                  <span className="absolute -left-[10px] top-1 inline-block h-2.5 w-2.5 rounded-full bg-zinc-400"></span>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Criação de Sistemas para Clientes Reais
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">Projetos profissionais</p>
                  <p className="mt-4 text-[1.15rem] leading-relaxed text-zinc-300 text-justify">
                    Desenvolvimento de sistemas de gestão e APIs para clientes,
                    aplicando conhecimentos em backend e bancos de dados.
                  </p>
                </li>
              </ol>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}