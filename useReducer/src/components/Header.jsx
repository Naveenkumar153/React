import { useContext, useRef } from 'react';

import CartModal from './CartModal.jsx';
import { CartContext } from '../store/cart-context.jsx';

export default function Header() {

  const { totalItems } = useContext(CartContext);
  const modal = useRef();
  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (totalItems > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({totalItems})</button>
        </p>
      </header>
    </>
  );
}
