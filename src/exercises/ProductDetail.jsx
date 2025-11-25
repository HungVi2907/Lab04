import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <section style={{ padding: '1.5rem' }}>
      <h2>Section 5 · Product Detail</h2>
      <p>Viewing Product ID: {id}</p>
      <Link to="/products">Back to products</Link>
    </section>
  );
}
