import React, { useReducer } from 'react';

// Initial state
const initialState = {
  items: [],
  total: 0,
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        items: filteredItems,
        total: state.total - action.payload.price,
      };
    case 'CHECKOUT':
      return {
        items: [],
        total: 0,
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Dummy product list
  const products = [
    { id: 1, name: 'Phone', price: 499 },
    { id: 2, name: 'Laptop', price: 999 },
    { id: 3, name: 'Headphones', price: 149 },
  ];

  return (
     <div style={{ padding: '20px' }} >
      <h2>Shopping Cart</h2>

      <h3>Products:</h3>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name} - ₹{product.price}</span>
          <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h3>Cart Items:</h3>
      {state.items.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        state.items.map(item => (
          <div key={item.id}>
            <span>{item.name} - ₹{item.price}</span>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>
              Remove
            </button>
          </div>
        ))
      )}

      <h4>Total: ₹{state.total}</h4>

      <button onClick={() => dispatch({ type: 'CHECKOUT' })} disabled={state.items.length === 0}>
        Checkout
      </button>
    </div>
  );
};

export default ShoppingCart;
