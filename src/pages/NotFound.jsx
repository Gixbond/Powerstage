export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center text-center p-10">
      <div>
        <h1 className="h1 mb-6">Seite nicht gefunden</h1>
        <p className="body mb-8">Die angeforderte Seite existiert nicht.</p>
        <a href="#/" className="inline-block bg-white/10 border border-white/15 px-5 py-3 rounded-lg text-white hover:bg-white/15 transition">Zurück zur Startseite</a>
      </div>
    </div>
  );
}

