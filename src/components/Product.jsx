import React from 'react';

import '../style/components/Products.css';

const Product = ({ product, handleAddToCard }) => (
  <div className="Products-item">
    <img src={product.image} alt={product.title} />
    <div className="Product-item-info">
      <h2>
        {product.title + ' '}
        <span>
          $
          {product.price}
        </span>
      </h2>
      <p>{product.description}</p>
    </div>
    <button type="button" onClick={handleAddToCard(product)}>Comprar</button>
  </div>
)

export default Product
