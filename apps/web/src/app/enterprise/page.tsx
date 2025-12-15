import Link from 'next/link';

export default function EnterprisePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/">← Home</Link>
      </nav>

      <h1>Enterprise</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#666' }}>
        Tailored connectors, dedicated instances, and enterprise-grade features
      </p>

      <section style={{ marginTop: '3rem' }}>
        <h2>Enterprise Features</h2>
        <ul style={{ marginTop: '1rem', paddingLeft: '2rem' }}>
          <li>Enterprise connectors (private integrations)</li>
          <li>Dedicated instances</li>
          <li>Data residency options</li>
          <li>VPC / private networking</li>
          <li>BYO-key / KMS integration</li>
          <li>Audit export / SIEM forwarding</li>
          <li>Custom SLAs</li>
          <li>Priority support</li>
        </ul>
      </section>

      <nav style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/enterprise/connectors">Connectors</Link>
        <Link href="/enterprise/instances">Instances</Link>
      </nav>

      <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px', border: '1px solid #ffc107' }}>
        <h3>Enterprise Deployment</h3>
        <p style={{ marginTop: '0.5rem' }}>
          <strong>Note:</strong> Enterprise features (dedicated instances, enterprise connectors) 
          are deployed from a private repository and require a commercial license. 
          This public repository contains only the open-source protocol.
        </p>
        <p style={{ marginTop: '1rem' }}>
          For Enterprise features, please contact:
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <a 
            href="mailto:sales@settler.dev" 
            style={{ 
              padding: '0.75rem 1.5rem', 
              background: '#0070f3', 
              color: 'white', 
              borderRadius: '4px', 
              display: 'inline-block',
              fontWeight: '500'
            }}
          >
            Contact Sales
          </a>
        </p>
      </section>
    </main>
  );
}
