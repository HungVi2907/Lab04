import { Link } from 'react-router-dom';

const sampleProducts = [
  { id: '1', name: 'Laptop Pro X' },
  { id: '2', name: 'Mechanical Keyboard' },
  { id: '3', name: 'Noise Cancelling Headphones' },
];

export default function ProductList() {
  return (
    <section style={{ padding: '1.5rem' }}>
      <h2>Section 5 · Router List</h2>
      <p>Select a product to view its details.</p>
      <ul>
        {sampleProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
