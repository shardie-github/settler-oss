import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Settler</h1>
      <p>Financial Reconciliation Protocol</p>
      
      <nav style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/protocol">Protocol</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/download">Download</Link>
      </nav>

      <section style={{ marginTop: '3rem' }}>
        <h2>Open-Source Protocol</h2>
        <p>
          Settler Protocol provides powerful APIs and SDKs for financial reconciliation, 
          transaction matching, and data synchronization. Build with it, self-host it, 
          and integrate it into your applications.
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/protocol" style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', borderRadius: '4px' }}>
            Read the Spec
          </Link>
          <Link href="/download" style={{ padding: '0.5rem 1rem', background: '#333', color: 'white', borderRadius: '4px' }}>
            Download SDKs & CLI
          </Link>
          <Link href="/docs" style={{ padding: '0.5rem 1rem', background: '#666', color: 'white', borderRadius: '4px' }}>
            Documentation
          </Link>
        </div>
      </section>

      <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Self-Hostable & MIT Licensed</h3>
        <p style={{ marginTop: '0.5rem' }}>
          The Settler Protocol is open-source and can be self-hosted. 
          <Link href="/docs/self-hosting" style={{ marginLeft: '0.5rem', color: '#0070f3' }}>
            Learn how to self-host →
          </Link>
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          <strong>Note:</strong> Console and Enterprise features (managed hosting, enterprise connectors) 
          are deployed from a private repository and require a commercial license.
        </p>
      </section>
    </main>
  );
}
