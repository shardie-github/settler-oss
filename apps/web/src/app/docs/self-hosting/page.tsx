import Link from 'next/link';

export default function SelfHostingPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/docs">← Docs</Link>
      </nav>

      <h1>Self-Hosting Guide</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#666' }}>
        Deploy the Settler Protocol on your own infrastructure
      </p>

      <section style={{ marginTop: '3rem' }}>
        <h2>Quick Start</h2>
        <p>
          The Settler Protocol is open-source and can be self-hosted. See the full guide:
        </p>
        <div style={{ marginTop: '1rem' }}>
          <Link 
            href="https://github.com/shardie-github/settler-oss/blob/main/docs/SELF_HOSTING.md" 
            style={{ color: '#0070f3', fontWeight: '500' }}
          >
            View Self-Hosting Guide on GitHub →
          </Link>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>What You Can Self-Host</h2>
        <ul style={{ marginTop: '1rem', paddingLeft: '2rem' }}>
          <li>Protocol API server</li>
          <li>All SDK functionality</li>
          <li>CLI tools</li>
          <li>Protocol connectors (REST, CSV, JSON)</li>
        </ul>
      </section>

      <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px', border: '1px solid #ffc107' }}>
        <h3>What You Cannot Self-Host</h3>
        <p style={{ marginTop: '0.5rem' }}>
          Enterprise connectors, Console UI, and managed SaaS features are part of the 
          licensed SaaS offering and are deployed from a private repository.
        </p>
      </section>
    </main>
  );
}
