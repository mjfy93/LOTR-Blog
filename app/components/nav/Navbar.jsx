import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const navLinks = [
  { to: '/', label: 'Home', icon: 'home', end: true },
  { to: '/about', label: 'About This Project', icon: ['fab', 'github'] },
  { to: '/contact', label: 'About Me', icon: 'envelope' }
]

export default function Navbar() {


  return (
    <nav className={`navbar navbar-expand-md bg-dark p-1`}>
      <div className='container-fluid'>
        <NavLink
          to='/'
          end={navLinks[0].end}
          className='navbar-brand'
          style={{ color: '#eedda0' }}
        >
          <FontAwesomeIcon
            icon={navLinks[0].icon}
            className='me-1'
          />
          {navLinks[0].label}
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className='navbar-nav ms-auto align-items-center'>
            {navLinks.map(
              ({ to, label, icon, end }, i) =>
                i > 0 && (
                  <li
                    key={to}
                    className='nav-item'
                  >
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        `nav-link${isActive ? ' active' : ''}`}
                      style={{ color: '#eedda0' }}
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        className='me-1'
                      />
                      {label}
                    </NavLink>
                  </li>
                )
            )}

          </ul>
        </div>
      </div>
    </nav>
  )
}
