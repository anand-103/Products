import React from 'react';
import { useParams } from 'react-router-dom';
import products from './data.jsx';
import Navbar from './Navbar.jsx'
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
    <Navbar />
    <div className="container mt-3">
      <h1 className="text-center mt-3 mb-3">{product.name}</h1>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center ">
          <img src={product.imageUrl} alt={product.name} className="img-fluid product-image1" />
        </div>
        <div className="col-md-6">
          <h3>Price: ₹{product.price}</h3>
          <p><b>Description:</b> {product.description}</p>
          <p><b>Category:</b> {product.category}</p>
          <p>
            <b>In Stock:</b> {product.inStock > 0 ? <span className="text-success">In Stock</span> : <span className="text-danger">Out of Stock</span>}
          </p>
          {product.inStock < 5 && product.inStock > 0 && <p className="text-warning">Hurry, only {product.inStock} items left!</p>}
          {product.onSale && <p className="text-success">On Sale!</p>}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
