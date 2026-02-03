import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const meta = () => {
  return [
    { title: 'Contact - LOTR Blog' },
    { name: 'description', content: 'Get in touch with María José. Open to opportunities in web development.' }
  ]
}

export default function Contact() {
  const colors = {
    accent: '#eedda0',
    dark: '#060010',
  };

  const contactInfo = {
    name: 'María José Ferro Yepes',
    title: 'Full-Stack Developer Jr.',
    email: 'maria.jose.ferro@hotmail.com ',
    linkedin: 'www.linkedin.com/in/mariajoseferroyepes ',
    github: 'https://github.com/mjfy93 ',
    location: 'Bogotá, Colombia',
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">

          <div className="text-center mb-5">
            <h1 className="display-4 mb-3" style={{ color: colors.accent }}>
              Get In Touch
            </h1>
            <p className="lead text-muted">
              I'm always open to discussing new opportunities, projects, or collaborations.
            </p>
          </div>


          <div className="card bg-dark mb-4" style={{ borderColor: colors.accent }}>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <h2 className="h3 mb-2" style={{ color: colors.accent }}>
                  {contactInfo.name}
                </h2>
                <p className="text-muted mb-0">{contactInfo.title}</p>
                {contactInfo.location && (
                  <p className="text-muted">
                    <FontAwesomeIcon icon="location-dot" className="me-2" />
                    {contactInfo.location}
                  </p>
                )}
              </div>


              <div className="row g-4">

                <div className="col-12">
                  <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: 'rgba(238, 221, 160, 0.1)' }}>
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: colors.accent,
                        color: colors.dark
                      }}
                    >
                      <FontAwesomeIcon icon="envelope" size="lg" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="h6 mb-1" style={{ color: colors.accent }}>Email</h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-decoration-none contact-link"
                        style={{ color: '#fff' }}
                      >
                        {contactInfo.email}<FontAwesomeIcon icon='link' size="xs" />
                      </a>
                    </div>
                  </div>
                </div>


                <div className="col-12">
                  <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: 'rgba(238, 221, 160, 0.1)' }}>
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: colors.accent,
                        color: colors.dark
                      }}
                    >
                      <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="h6 mb-1" style={{ color: colors.accent }}>LinkedIn</h3>
                      <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none contact-link"
                        style={{ color: '#fff' }}
                      >
                        {contactInfo.linkedin} <FontAwesomeIcon icon='link' size="xs" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: 'rgba(238, 221, 160, 0.1)' }}>
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: colors.accent,
                        color: colors.dark
                      }}
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="h6 mb-1" style={{ color: colors.accent }}>GitHub</h3>
                      <a
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none contact-link"
                        style={{ color: '#fff' }}
                      >
                        {contactInfo.github}<FontAwesomeIcon icon='link' size="xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-dark" style={{ borderColor: colors.accent }}>
            <div className="card-body p-4">
              <h3 className="h5 mb-3" style={{ color: colors.accent }}>
                About Collaboration
              </h3>
              <p className="text-muted mb-3">
                I'm particularly interested in:
              </p>
              <ul className="mb-0">
                <li className="mb-2">Frontend development opportunities</li>
                <li className="mb-2">React and modern JavaScript projects</li>
                <li className="mb-2">Web animation and interactive experiences</li>
                <li className="mb-0">Open source contributions</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-4">
            <a
              href="/"
              className="btn me-2"
              style={{
                backgroundColor: 'transparent',
                color: colors.accent,
                border: `1px solid ${colors.accent}`
              }}
            >
              <FontAwesomeIcon icon="home" className="me-2" />
              Back to Home
            </a>
            <a
              href="/about"
              className="btn"
              style={{
                backgroundColor: 'transparent',
                color: colors.accent,
                border: `1px solid ${colors.accent}`
              }}
            >
              About This Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}