export const meta = () => {
  return [
    { title: 'About This Project - LOTR Blog' },
    { name: 'description', content: 'Technical overview of the Lord of the Rings blog project built with React Router v7, demonstrating modern web development practices and secure API integration.' }
  ]
}

export default function About() {
  // Custom color scheme - yellow/cream accents on dark
  const colors = {
    accent: '#eedda0', // Yellow/cream for text, borders, buttons
    dark: '#060010',   // Dark backgrounds
  };

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="display-4 mb-3" style={{ color: colors.accent }}>About This Project</h1>
          <p className="lead text-muted">
            A modern Lord of the Rings blog demonstrating React Router v7, secure API integration,
            and advanced animation techniques.
          </p>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="h3 mb-4" style={{ color: colors.accent }}>Technology Stack</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card h-100 bg-dark" style={{ borderColor: colors.accent }}>
                <div className="card-body">
                  <h3 className="h5 card-title" style={{ color: colors.accent }}>Frontend</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>React Router v7</span>
                      <small className="text-muted">File-based routing with SSR</small>
                    </li>
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>Vite</span>
                      <small className="text-muted">Build tool & dev server</small>
                    </li>
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>CSS Modules</span>
                      <small className="text-muted">Scoped component styling</small>
                    </li>
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>Bootstrap 5</span>
                      <small className="text-muted">UI framework</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 bg-dark" style={{ borderColor: colors.accent }}>
                <div className="card-body">
                  <h3 className="h5 card-title" style={{ color: colors.accent }}>Animation & Graphics</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>GSAP</span>
                      <small className="text-muted">High-performance animations</small>
                    </li>
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>React Bits (OGL)</span>
                      <small className="text-muted">WebGL-powered effects</small>
                    </li>
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>WebGL Shaders</span>
                      <small className="text-muted">Custom light ray effects</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 bg-dark" style={{ borderColor: colors.accent }}>
                <div className="card-body">
                  <h3 className="h5 card-title" style={{ color: colors.accent }}>Backend & API</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>Resource Routes</span>
                      <small className="text-muted">Server-side API proxy</small>
                    </li>
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>The One API</span>
                      <small className="text-muted">LOTR data source</small>
                    </li>
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>Environment Variables</span>
                      <small className="text-muted">Secure token management</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 bg-dark" style={{ borderColor: colors.accent }}>
                <div className="card-body">
                  <h3 className="h5 card-title" style={{ color: colors.accent }}>Deployment</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>Vercel</span>
                      <small className="text-muted">Hosting & serverless functions</small>
                    </li>
                    <li className="mb-2">
                      <span className="badge me-2" style={{ backgroundColor: colors.accent, color: colors.dark }}>GitHub</span>
                      <small className="text-muted">Version control & CI/CD</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="h3 mb-4" style={{ color: colors.accent }}>Key Features</h2>
          <div className="card bg-dark" style={{ borderColor: colors.accent }}>
            <div className="card-body">
              <ul className="mb-0">
                <li className="mb-2">Secure API integration using React Router resource routes as serverless proxies</li>
                <li className="mb-2">Server-side rendering (SSR) with proper client-side hydration</li>
                <li className="mb-2">Advanced WebGL animations with dynamic light ray effects</li>
                <li className="mb-2">GSAP-powered interactive menu with directional animations</li>
                <li className="mb-2">CSS Modules for component-scoped styling</li>
                <li className="mb-2">React Context API for theme management</li>
                <li className="mb-2">Responsive design with mobile support</li>
                <li className="mb-0">Optimized performance with lazy loading and code splitting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Challenges */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="h3 mb-4" style={{ color: colors.accent }}>Technical Highlights</h2>

          <div className="accordion" id="technicalAccordion">
            {/* Challenge 1 */}
            <div className="accordion-item mb-2 bg-dark" style={{ borderColor: colors.accent }}>
              <h3 className="accordion-header">
                <button
                  className="accordion-button bg-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#challenge1"
                  style={{ color: colors.accent, borderColor: colors.accent }}
                >
                  Secure API Integration
                </button>
              </h3>
              <div id="challenge1" className="accordion-collapse collapse show" data-bs-parent="#technicalAccordion">
                <div className="accordion-body bg-dark">
                  <p className="mb-2"><strong style={{ color: colors.accent }}>Challenge:</strong> Protecting bearer tokens in a client-side React application while maintaining a good developer experience.</p>
                  <p className="mb-2"><strong style={{ color: colors.accent }}>Solution:</strong> Implemented React Router v7 resource routes as API proxies. The frontend calls <code className="bg-secondary text-light px-2 py-1 rounded">/api/lotr</code>, which is handled server-side by a resource route that adds the bearer token from environment variables before forwarding to The One API.</p>
                  <p className="mb-0"><strong style={{ color: colors.accent }}>Result:</strong> Tokens never exposed to the client, maintaining security without sacrificing code simplicity.</p>
                </div>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="accordion-item mb-2 bg-dark" style={{ borderColor: colors.accent }}>
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#challenge2"
                  style={{ color: colors.accent, borderColor: colors.accent }}
                >
                  SSR-Compatible Client Components
                </button>
              </h3>
              <div id="challenge2" className="accordion-collapse collapse" data-bs-parent="#technicalAccordion">
                <div className="accordion-body bg-dark">
                  <p className="mb-2"><strong style={{ color: colors.accent }}>Challenge:</strong> Integrating WebGL/client-only components (LightRays, animations) with React Router's server-side rendering without hydration mismatches.</p>
                  <p className="mb-2"><strong style={{ color: colors.accent }}>Solution:</strong> Created a <code className="bg-secondary text-light px-2 py-1 rounded">ClientOnly</code> wrapper component that only renders children on the client side. Combined with CSS Modules (instead of runtime CSS injection) to ensure consistent styles between server and client rendering.</p>
                  <p className="mb-0"><strong style={{ color: colors.accent }}>Result:</strong> Complex client-side effects work seamlessly with SSR, maintaining performance and SEO benefits.</p>
                </div>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="accordion-item bg-dark" style={{ borderColor: colors.accent }}>
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#challenge3"
                  style={{ color: colors.accent, borderColor: colors.accent }}
                >
                  Modern React Patterns
                </button>
              </h3>
              <div id="challenge3" className="accordion-collapse collapse" data-bs-parent="#technicalAccordion">
                <div className="accordion-body bg-dark">
                  <p className="mb-2"><strong style={{ color: colors.accent }}>Approach:</strong> Following current React and web development best practices:</p>
                  <ul className="mb-0">
                    <li><strong style={{ color: colors.accent }}>CSS Modules:</strong> Scoped styling prevents class name conflicts and makes components portable</li>
                    <li><strong style={{ color: colors.accent }}>React Context:</strong> Clean state management for theme without prop drilling</li>
                    <li><strong style={{ color: colors.accent }}>Custom Hooks:</strong> Reusable API fetching logic with proper error handling</li>
                    <li><strong style={{ color: colors.accent }}>Error Boundaries:</strong> Graceful error handling at the route level</li>
                    <li><strong style={{ color: colors.accent }}>File-based Routing:</strong> Leveraging React Router v7's convention-over-configuration approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="h3 mb-4" style={{ color: colors.accent }}>Architecture Overview</h2>
          <div className="card bg-dark" style={{ borderColor: colors.accent }}>
            <div className="card-body">
              <pre className="p-3 rounded mb-0 bg-secondary text-light" style={{ overflow: 'auto' }}>
                {`┌─────────────────────────────────────────────────┐
│              User Browser                       │
│  ┌──────────────────────────────────────────┐  │
│  │     React Router v7 (Frontend)           │  │
│  │  • Routes (file-based)                   │  │
│  │  • Components (CSS Modules)              │  │
│  │  • Client-only (WebGL, GSAP)            │  │
│  └────────────┬─────────────────────────────┘  │
└───────────────┼─────────────────────────────────┘
                │
                │ fetch('/api/lotr?endpoint=book')
                ▼
┌─────────────────────────────────────────────────┐
│           Vercel Edge Network                   │
│  ┌──────────────────────────────────────────┐  │
│  │   Resource Route (/api/lotr)             │  │
│  │  • Adds Bearer Token (server-side)       │  │
│  │  • Proxies request                       │  │
│  └────────────┬─────────────────────────────┘  │
└───────────────┼─────────────────────────────────┘
                │
                │ + Authorization: Bearer <token>
                ▼
┌─────────────────────────────────────────────────┐
│            The One API                          │
│         (LOTR Data Source)                      │
└─────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="row">
        <div className="col-12">
          <div className="card bg-dark" style={{ borderColor: colors.accent }}>
            <div className="card-body text-center">
              <h2 className="h4 mb-3" style={{ color: colors.accent }}>Project Links</h2>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a
                  href="https://github.com/mjfy93/LOTR-Blog"
                  className="btn"
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.dark,
                    border: 'none'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github me-2"></i>
                  View on GitHub
                </a>
                <a
                  href="https://the-one-api.dev/"
                  className="btn"
                  style={{
                    backgroundColor: 'transparent',
                    color: colors.accent,
                    border: `1px solid ${colors.accent}`
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The One API Docs
                </a>
              </div>
              <p className="text-muted mt-3 mb-0">
                Built by María José Ferro as a portfolio piece demonstrating modern React patterns,
                secure API integration, and advanced animation techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}