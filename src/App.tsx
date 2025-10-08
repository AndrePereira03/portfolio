import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'André Pereira - Portfólio';
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[420px_minmax(0,1fr)]">
        <aside className="bg-zinc-900 md:sticky md:top-0 md:h-screen md:self-start overflow-hidden">
          <div className="relative h-[85vh]">
            <img
              src="/andre.jpg"
              alt="Foto de André Pereira"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          </div>

          <div className="px-8 py-8">
            <h1 className="text-3xl font-extrabold tracking-tight">André Martins Pereira</h1>
            <p className="mt-2 text-lg text-zinc-300">Desenvolvedor Backend</p>

            <div className="mt-6 flex items-center gap-4">
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


        <div className="px-6 py-12 md:px-12">
          <section className="mx-auto max-w-3xl space-y-28">
            <section id="sobre">
              <h2 className="text-3xl font-semibold">Sobre mim</h2>
              <p className="mt-4 text-lg text-zinc-300">
                Escrever sobre mim, bla bla bla...
              </p>
            </section>

            <section id="experiencias">
              <h2 className="text-3xl font-semibold">Experiências</h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <h3 className="text-xl font-medium">GETCOMP · Pesquisador em IA</h3>
                  <p className="mt-3 text-zinc-400">
                    Redes neurais convolucionais, projetos Click Cocho, FER2013, reconstrução 3D de folha.
                    Minicursos de Git e revisão de Algoritmos I/II.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <h3 className="text-xl font-medium">IFMG · Monitoria</h3>
                  <p className="mt-3 text-zinc-400">
                    Monitor de Administração e Matemática II (2020–2021).
                  </p>
                </div>
              </div>
            </section>

            <section id="tecnologias">
              <h2 className="text-3xl font-semibold">Tecnologias</h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm">Python</li>
                <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm">Java</li>
                <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm">TypeScript</li>
                <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm">JavaScript</li>
                <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm">PostgreSQL</li>
                <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm">MySQL</li>
                <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm">Flask</li>
                <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm">HTML</li>
                <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm">CSS</li>
              </ul>
            </section>

            <section id="projetos">
              <h2 className="text-3xl font-semibold">Projetos</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <a
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:bg-zinc-900 transition"
                  href="https://github.com/AndrePereira03"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className="text-xl font-medium">API de Usuários</h3>
                  <p className="mt-3 text-zinc-400">
                    CRUD, autenticação JWT, testes e Docker.
                  </p>
                </a>
                <a
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:bg-zinc-900 transition"
                  href="https://github.com/AndrePereira03"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className="text-xl font-medium">FER2013 com CNN</h3>
                  <p className="mt-3 text-zinc-400">
                    Pipeline de treino, métricas e matriz de confusão.
                  </p>
                </a>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}