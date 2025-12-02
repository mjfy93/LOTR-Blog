import '../components/FlowingMenu.css';
import { fetchFromLOTRAPI } from '../utils/api';
import { useState, useEffect } from 'react';
import FlowingMenu from '../components/FlowingMenu';
import ClientOnly from '../components/ClientOnly';

const menuItems = [
  { link: '#', text: 'Books', image: '/images/menu/one-ring-inscription.png' },
  { link: '#', text: 'Movies', image: '/images/menu/ring.png' },
  { link: '#', text: 'Characters', image: '/images/menu/fellowship.png' },
  { link: '#', text: 'Quotes', image: 'https://picsum.photos/600/400?random=4' },
  { link: '#', text: 'All about J.R.R. Tolkien', image: 'https://picsum.photos/600/400?random=4' },

];
export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      try {
        const data = await fetchFromLOTRAPI('book');
        console.log('Books data:', data);
        setBooks(data.docs);
      } catch (error) {
        console.error('Failed to load books:', error);
      } finally {
        setLoading(false);
      }
    }
    loadBooks();
  }, []);

  if (loading) return <div>Loading...</div>;



  return (
    <div>
      <div style={{ height: '600px', position: 'relative' }}>

        <ClientOnly>
          {() => <FlowingMenu items={menuItems} />}
        </ClientOnly>

      </div>


    </div>
  );
}