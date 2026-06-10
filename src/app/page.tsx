export default function Home() {
  const fecha = new Date().toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1>¡Hola desde GitHub Actions + Vercel!</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>📅 Fecha de hoy: <strong>{fecha}</strong></p>
    </main>
  );
}
