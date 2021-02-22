import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCard = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };

  return {
    addToCard,
    removeFromCart,
    state,
  }

};

export default useInitialState;
