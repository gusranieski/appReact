import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.count
        })
        return accu
    }
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
}, [cart]);

  function addItem(productToAdd) {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd]);
        } else {
            setCart(
                cart.map((prod) => {
                    return prod.id === productToAdd.id
                        ? { ...prod, count: productToAdd.count }
                        : prod;
                })
            );
        }
    }

const getProductQuantity = (id) => {
  const product = cart.find(prod => prod.id === id)
  if(product) {
    return product.count
  }
}

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const productLess = cart.filter((prod) => prod.id !== id);
    setCart(productLess);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.count * prod.price, 0)
  }
  
  return (
    <CartContext.Provider value={{ addItem, getProductQuantity, removeItem, clearCart, totalPrice, totalQuantity, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
