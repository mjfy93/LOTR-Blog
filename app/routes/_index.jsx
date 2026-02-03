
import { Link } from 'react-router';
import FlowingMenu from '../components/FlowingMenu/FlowingMenu';
import ClientOnly from '../components/ClientOnly';

const menuItems = [
  { link: '/books', text: 'Books', image: '/images/menu/inscription.png' },
  { link: '/movies', text: 'Movies & Other Adaptations', image: '/images/menu/ring.png' },
  { link: '/characters', text: 'Characters', image: '/images/menu/fellowship.png' },
  { link: '#', text: 'Quotes', image: '/images/menu/quote.png' },
  { link: '#', text: 'About J.R.R. Tolkien', image: '/images/menu/tolkien.png' },

];
export default function Home() {

  return (
    <div>
      {/* Desktop FlowingMenu */}
      <div
        className="flowing-menu-desktop d-none d-md-block"
        style={{ height: '600px', position: 'relative' }}
      >
        <ClientOnly>
          {() => <FlowingMenu items={menuItems} />}
        </ClientOnly>
      </div>

      {/* Mobile Grid Menu */}
      <div className="flowing-menu-mobile d-md-none">
        <div className="mobile-menu-grid">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="mobile-menu-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
