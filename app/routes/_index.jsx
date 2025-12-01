import { fetchFromLOTRAPI } from '../utils/api';
import { useState, useEffect } from 'react';

export default function Index() {
  console.log('DEV MODE:', import.meta.env.DEV);
  console.log('TOKEN EXISTS:', !!import.meta.env.VITE_LOTR_API_TOKEN);
  console.log('TOKEN VALUE:', import.meta.env.VITE_LOTR_API_TOKEN?.substring(0, 10) + '...');
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

  if (loading) return <div>Loading LOTR data...</div>;

  return (
    <div>
      <h1>Lord of the Rings Books</h1>
      {books.map(book => (
        <div key={book._id}>
          <h2>{book.name}</h2>
        </div>
      ))}
    </div>
  );
}