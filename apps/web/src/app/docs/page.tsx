import Link from 'next/link';

export default function DocsPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/">← Home</Link>
      </nav>

      <h1>Documentation</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#666' }}>
        Public documentation for Settler Protocol and Console
      </p>

      <section style={{ marginTop: '3rem' }}>
        <h2>Protocol Documentation (OSS)</h2>
        <ul style={{ marginTop: '1rem', paddingLeft: '2rem' }}>
          <li><Link href="/protocol">Protocol Overview</Link></li>
          <li><Link href="/protocol/sdk">SDK Documentation</Link></li>
          <li><Link href="/protocol/spec">API Specification</Link></li>
          <li><Link href="/protocol/examples">Examples & Tutorials</Link></li>
        </ul>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Self-Hosting</h2>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          Learn how to self-host the Settler Protocol.
          <Link href="/docs/self-hosting" style={{ marginLeft: '0.5rem', color: '#0070f3' }}>
            Self-Hosting Guide →
          </Link>
        </p>
      </section>

      <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Console & Enterprise (Licensed SaaS)</h2>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          Console and Enterprise features are deployed from a private repository and require 
          a commercial license. For access, contact{' '}
          <a href="mailto:sales@settler.dev" style={{ color: '#0070f3' }}>
            sales@settler.dev
          </a>
        </p>
      </section>
    </main>
  );
}
