import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'Portfólio de André';
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container py-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          André Martins Pereira
        </h1>
        <p className="mt-3 text-lg text-zinc-300">
          Desenvolvedor Backend — Python • Java • PostgreSQL • APIs REST
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <a
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm hover:bg-zinc-900 transition text-white"
            href="#projetos"
          >
            <h2 className="font-semibold text-xl">Projetos</h2>
            <p className="mt-2 text-zinc-400">APIs, automações e pesquisa aplicada.</p>
          </a>

          <a
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm hover:bg-zinc-900 transition text-white"
            href="#contato"
          >
            <h2 className="font-semibold text-xl">Contato</h2>
            <p className="mt-2 text-zinc-400">LinkedIn, GitHub e e-mail para oportunidades.</p>
          </a>
        </div>
      </section>

      <section id="projetos" className="container py-16">
        <h2 className="text-2xl font-semibold">Projetos</h2>
        <p className="mt-2 text-zinc-400">cards com APIs, automações e pesquisa.</p>
      </section>

      <section id="contato" className="container py-16">
        <h2 className="text-2xl font-semibold">Contato</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              className="text-blue-400 hover:text-blue-300 underline"
              href="https://github.com/AndrePereira03"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-blue-400 hover:text-blue-300 underline"
              href="https://www.linkedin.com/in/devandrepereira/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-blue-400 hover:text-blue-300 underline"
              href="mailto:andre.pereira@estudante.ufjf.br"
            >
              andre.pereira@estudante.ufjf.br
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}