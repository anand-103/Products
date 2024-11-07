import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from './data.jsx';
import Navbar from './Navbar.jsx'

const ProductListing = () => {
  const { category } = useParams();
  let filteredProducts = products;

  if (category) {
    filteredProducts = products.filter((product) => product.category === category);
  }

  return (
    <div>
        <Navbar />
      <h1 className='text-center mt-3'>Products List</h1>
      <div className="container d-flex flex-wrap justify-content-start">
        {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} className="text-decoration-none">
          <div key={product.id} className="card mx-3 mt-3 mb-3" style={{ width: "15rem", height:"100vh" }}>
            <div className="image mt-2">
              <img src={product.imageUrl} alt={product.name} className="card-img-top img-fluid product-image" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <b className="card-text">Price: ₹{product.price}</b>
              <p className="card-text"><b>Description:</b> {product.description}</p>
              <p className="card-text"><b>Category:</b> {product.category}</p>
              <p className="card-text">
                <b>In Stock:</b> {product.inStock > 0 ? <span className="text-success">In Stock</span> : <span className="text-danger">Out of Stock</span>}
              </p>
              {product.inStock < 5 && product.inStock > 0 && <p className="text-warning">Hurry, only {product.inStock} items left!</p>}
              {product.price < 1000 && <span className="badge bg-success">Budget-Friendly</span>}
              {product.price > 50000 && <span className="badge bg-warning">Premium Product</span>}
              {product.price > 5000 && <p className="text-primary">Free Shipping</p>}
              {product.onSale && <p className="text-success">On Sale!</p>}
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;


