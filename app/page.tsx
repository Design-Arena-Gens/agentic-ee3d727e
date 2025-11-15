import quotes from "../data/quotes";

export default function Page() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Fjal? t? Abdullah ibn al-Mubarak p?r lotin dhe qarjen</h1>
        <p className="subtitle">
          P?rkujtesa e zemr?s: loti p?r m?katin, frika dhe shpresa.
        </p>
      </header>

      <section className="list">
        {quotes.map((q) => (
          <article key={q.id} className="card">
            <p className="text">?{q.text}?</p>
            <div className="meta">
              <span>? {q.attribution}</span>
              {q.reference ? <span className="ref">{q.reference}</span> : null}
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>
          Ky ?sht? nj? botim i thjesht? statik p?r lexim personal dhe
          p?rkujtes? shpirt?rore.
        </p>
      </footer>
    </main>
  );
}
