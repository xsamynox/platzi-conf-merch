import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';
import '../style/components/Products.css';

const Products = () => {
  const { state, addToCard } = useContext(AppContext);
  const { products } = state;

  const handleAddToCard = product => () => {
    addToCard(product);
  };

  return (
    <div className="Products">
      <div className="Product-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCard={handleAddToCard} />
        ))}
      </div>
    </div>
  );
};

export default Products;
