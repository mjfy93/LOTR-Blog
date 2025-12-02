import './utils/fontAwesomeLibrary';
import './components/LightRays.css';
import { Outlet } from 'react-router'
import HtmlShell from './components/HtmlShell.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import LightRays from './components/LightRays';
import ClientOnly from './components/ClientOnly';

export default function App() {
  return (
    <ThemeProvider>
      <HtmlShell>
        <div style={{
          width: '100%',
          minHeight: '100vh',
          position: 'relative',
          isolation: 'isolate' // This creates a new stacking context
        }}>
          <ClientOnly>
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
      </HtmlShell>
    </ThemeProvider>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <ThemeProvider>
      <HtmlShell>
        <div className='container'>
          <h2>Error!</h2>
          <h4>{error.message}</h4>
        </div>
      </HtmlShell>
    </ThemeProvider>
  )
}