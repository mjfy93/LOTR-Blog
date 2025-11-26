import 'bootstrap/dist/css/bootstrap.min.css'
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router'
import Navbar from './nav/Navbar'
import Footer from './Footer'


export default function HtmlShell({
  children,
  title = 'Lord of the Rings Blog'
}) {

  return (
    <html
      lang='en'
      data-bs-theme='dark'
    >
      <head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          name='description'
          content='Lord of the Rings Blog'
        />
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
