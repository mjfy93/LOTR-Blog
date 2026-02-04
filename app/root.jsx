
import './utils/fontAwesomeLibrary';
import './styles/responsive.css';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer';
import LightRays from './components/LightRays/LightRays';
import ClientOnly from './components/ClientOnly';
import { useIsMobile } from './hooks/useIsMobile';
import styles from './root.module.css';

export function Layout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Lord of the Rings Blog" />
        <title>Lord of the Rings Blog</title>

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


export default function Root() {
  const { isMobile, mounted } = useIsMobile();

  return (
    <ThemeProvider>
      <div className={styles.rootLayout}>
        <Navbar />
        <div className={styles.contentWrapper}>
          {/* LightRays - only on desktop for battery/performance */}
          {mounted && !isMobile && (
            <ClientOnly fallback={<div className={styles.lightRaysLayer} />}>
              <div className={styles.lightRaysLayer}>
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
          )}
          <div className={styles.scrollableContent}>
            <main className='container mt-4'>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </div>
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