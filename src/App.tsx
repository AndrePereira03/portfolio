export default function App() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="container py-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          André Martins Pereira
        </h1>
        <p className="mt-3 text-lg text-zinc-600">
          Desenvolvedor Backend — Python • Java • PostgreSQL • APIs REST
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <a
            className="rounded-xl border p-6 shadow-sm hover:shadow-md transition"
            href="#projetos"
          >
            <h2 className="font-semibold text-xl">Projetos</h2>
            <p className="mt-2 text-zinc-600">
              APIs, automações e pesquisa aplicada.
            </p>
          </a>

          <a
            className="rounded-xl border p-6 shadow-sm hover:shadow-md transition"
            href="#contato"
          >
            <h2 className="font-semibold text-xl">Contato</h2>
            <p className="mt-2 text-zinc-600">
              LinkedIn, GitHub e e-mail para oportunidades.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}