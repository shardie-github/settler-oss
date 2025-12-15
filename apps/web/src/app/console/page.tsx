import Link from 'next/link';

export default function ConsolePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/">← Home</Link>
      </nav>

      <h1>Settler Console</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#666' }}>
        Licensed SaaS Management Layer
      </p>

      <section style={{ marginTop: '3rem' }}>
        <h2>What is Console?</h2>
        <p>
          Settler Console is a licensed SaaS management layer that provides:
        </p>
        <ul style={{ marginTop: '1rem', paddingLeft: '2rem' }}>
          <li>Managed operations and hosting</li>
          <li>Enterprise connectors</li>
          <li>Multi-tenant administration</li>
          <li>RBAC and permissions</li>
          <li>Audit logs and compliance</li>
          <li>SSO integration</li>
          <li>Billing and usage tracking</li>
        </ul>
      </section>

      <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px', border: '1px solid #ffc107' }}>
        <h3>Console Deployment</h3>
        <p style={{ marginTop: '0.5rem' }}>
          <strong>Note:</strong> Settler Console is deployed from a private repository and requires 
          a commercial license. This public repository contains only the open-source protocol, SDKs, and CLI tools.
        </p>
        <p style={{ marginTop: '1rem' }}>
          For Console access or Enterprise features, please contact:
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <a href="mailto:sales@settler.dev" style={{ color: '#0070f3', fontWeight: '500' }}>
            sales@settler.dev
          </a>
        </p>
      </section>

      <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Prefer Self-Hosting?</h3>
        <p style={{ marginTop: '0.5rem' }}>
          The Settler Protocol is open-source and can be self-hosted. 
          <Link href="/docs/self-hosting" style={{ marginLeft: '0.5rem', color: '#0070f3' }}>
            Learn how to self-host →
          </Link>
        </p>
      </section>
    </main>
  );
}
