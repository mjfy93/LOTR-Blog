
import FlowingMenu from '../components/FlowingMenu/FlowingMenu';
import ClientOnly from '../components/ClientOnly';

const menuItems = [
  { link: '/books', text: 'Books', image: '/images/menu/inscription.png' },
  { link: '#', text: 'Movies', image: '/images/menu/ring.png' },
  { link: '#', text: 'Characters', image: '/images/menu/fellowship.png' },
  { link: '#', text: 'Quotes', image: '/images/menu/quote.png' },
  { link: '#', text: 'About J.R.R. Tolkien', image: '/images/menu/tolkien.png' },

];
export default function Home() {

  return (
    <div>
      <div style={{ height: '600px', position: 'relative', border: 'solid 3px black' }}>

        <ClientOnly>
          {() => <FlowingMenu items={menuItems} />}
        </ClientOnly>

      </div>


    </div>
  );
}