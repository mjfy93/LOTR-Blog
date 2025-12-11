// FontAwesome Library Configuration
import { library } from '@fortawesome/fontawesome-svg-core'

// Import icons you want to use globally
import {
  faLightbulb,
  faHome,
  faUser,
  faEnvelope,
  faLink

} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Add them to the library
library.add(
  faLightbulb,
  faHome,
  faUser,
  faEnvelope,
  faGithub,
  faLinkedin,
  faLink
)

// Export for potential direct use if needed
export {
  faLightbulb,
  faHome,
  faUser,
  faEnvelope,
  faGithub,
  faLinkedin,
  faLink
}

// When using the icon, just use the name in lowercase, no 'fa'
// Look at the Navbar.jsx file to see how to use it