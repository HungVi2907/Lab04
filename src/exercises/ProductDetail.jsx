import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <section>
      <p className="badge">Section 5 · Product Detail</p>
      <h2>Product #{id}</h2>
      <p>Hook <code>useParams</code> đọc tham số động ngay trên URL.</p>
      <div className="panel">
        <p style={{ margin: 0 }}>Trong app thực tế bạn sẽ gọi API theo ID này.</p>
      </div>
      <div className="button-row">
        <Link className="btn secondary" to="/products">
          ← Back to products
        </Link>
      </div>
    </section>
  );
}
