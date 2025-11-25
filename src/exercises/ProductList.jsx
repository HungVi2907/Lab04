import { Link } from 'react-router-dom';

const sampleProducts = [
  { id: '1', name: 'Laptop Pro X', price: '$2,499' },
  { id: '2', name: 'Mechanical Keyboard', price: '$189' },
  { id: '3', name: 'Noise Cancelling Headphones', price: '$349' },
];

export default function ProductList() {
  return (
    <section>
      <p className="badge">Section 5 · Router</p>
      <h2>Product Catalog</h2>
      <p>Danh sách này dùng <code>Link</code> để điều hướng tới route động.</p>
      <ul className="list-clean menu-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {sampleProducts.map((product) => (
          <li key={product.id}>
            <Link className="menu-card" to={`/products/${product.id}`}>
              <h3 style={{ margin: 0 }}>{product.name}</h3>
              <p style={{ margin: '0.35rem 0 0', fontWeight: 600 }}>{product.price}</p>
              <p style={{ margin: '0.35rem 0 0' }}>Xem chi tiết →</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
