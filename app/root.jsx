
import './utils/fontAwesomeLibrary';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer';
import LightRays from './components/LightRays';
import ClientOnly from './components/ClientOnly';

export function Layout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Lord of the Rings Blog" />
        <title>Lord of the Rings Blog</title>
        {/* ✅ Load Bootstrap from CDN instead */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

// ✅ Root component - your app structure
export default function Root() {
  return (
    <ThemeProvider>
      <Navbar />
      <div style={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        isolation: 'isolate'
      }}>
        <ClientOnly fallback={
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }} />
        }>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#ffe69c"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
            />
          </div>
        </ClientOnly>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <main className='container mt-4'>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <ThemeProvider>
      <Navbar />
      <div className='container'>
        <h2>Error!</h2>
        <h4>{error.message}</h4>
      </div>
      <Footer />
    </ThemeProvider>
  );
}