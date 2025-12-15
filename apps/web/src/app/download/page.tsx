import Link from 'next/link';

export default function DownloadPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/">← Home</Link>
      </nav>

      <h1>Download SDKs & CLI</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#666' }}>
        Install Settler Protocol SDKs and CLI tools
      </p>

      <section style={{ marginTop: '3rem' }}>
        <h2>TypeScript/Node.js SDK</h2>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
          <pre style={{ margin: 0, overflow: 'auto' }}>
{`npm install @settler/sdk
# or
yarn add @settler/sdk
# or
pnpm add @settler/sdk`}
          </pre>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/packages/sdk/README.md" style={{ color: '#0070f3' }}>
            View SDK Documentation →
          </Link>
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Python SDK</h2>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
          <pre style={{ margin: 0, overflow: 'auto' }}>
{`pip install settler-sdk
# or
pipenv install settler-sdk
# or
poetry add settler-sdk`}
          </pre>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/packages/sdk-python/README.md" style={{ color: '#0070f3' }}>
            View SDK Documentation →
          </Link>
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Go SDK</h2>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
          <pre style={{ margin: 0, overflow: 'auto' }}>
{`go get github.com/shardie-github/settler-oss/packages/sdk-go`}
          </pre>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/packages/sdk-go/README.md" style={{ color: '#0070f3' }}>
            View SDK Documentation →
          </Link>
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Ruby SDK</h2>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
          <pre style={{ margin: 0, overflow: 'auto' }}>
{`gem install settler-sdk
# or add to Gemfile
# gem 'settler-sdk'`}
          </pre>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/packages/sdk-ruby/README.md" style={{ color: '#0070f3' }}>
            View SDK Documentation →
          </Link>
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>React Components</h2>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
          <pre style={{ margin: 0, overflow: 'auto' }}>
{`npm install @settler/react-settler
# or
yarn add @settler/react-settler`}
          </pre>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/packages/react-settler/README.md" style={{ color: '#0070f3' }}>
            View React SDK Documentation →
          </Link>
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>CLI Tool</h2>
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
          <pre style={{ margin: 0, overflow: 'auto' }}>
{`# Via npm
npm install -g @settler/cli

# Via Homebrew (macOS/Linux)
brew install settler-cli`}
          </pre>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/packages/cli/README.md" style={{ color: '#0070f3' }}>
            View CLI Documentation →
          </Link>
        </p>
      </section>

      <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#e3f2fd', borderRadius: '8px' }}>
        <h3>All SDKs are MIT Licensed</h3>
        <p style={{ marginTop: '0.5rem' }}>
          All SDKs and CLI tools are open-source and MIT licensed. You can use them freely 
          in commercial and non-commercial projects.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/protocol" style={{ color: '#0070f3', fontWeight: '500' }}>
            Learn about the Protocol →
          </Link>
        </p>
      </section>
    </main>
  );
}
