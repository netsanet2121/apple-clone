import React, { useState, useEffect } from "react";

function IphonePro() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch IphonePro products");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="h4 text-muted">Loading IphonePros...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="h4 text-danger">Error: {error}</p>
      </div>
    );
  }

  //   {
  // "product_id": 4,
  // "product_url": "iphone-14",
  // "product_name": "iphone-14",
  // "Description_id": 3,
  // "Product_id": 4,
  // "Product_brief_description": "iPhone 14 with A15 Bionic chip, 6.1\\\" Super Retina XDR display, and dual 12MP cameras.",
  // "Product_description": "Latest affordable iPhone",
  // "Product_img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661026582327",
  // "Product_link": "/products/iphone-14",
  // "Price_id": 3,
  // "Starting_price": "799.00",
  // "Price_range": "799.00 - 999.00"
  // }

  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-5">IphonePro Models</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div key={product.product_id} className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={product.Product_img}
                alt={product.product_name}
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h2 className="card-title h5">{product.product_name}</h2>
                <p className="card-text text-muted">
                  {product.Product_brief_description}
                </p>
                <p className="card-text small">{product.Product_description}</p>
                <p className="card-text fw-bold">
                  From {product.Starting_price}
                </p>
                <a
                  href={product.Product_link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IphonePro;
