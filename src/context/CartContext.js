import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  console.log("carrito:", cart);
  console.log("contador:",totalQuantity)

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


// función para agregar un producto al carrito(no acepta duplicados y lo setea a la nueva cantidad)

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
            console.log("ya esta en el carrito");
        }
    }

  // función que devuelva true o false si hay un producto que esté en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // función para remover un producto del carrito
  const removeItem = (id) => {
    const productLess = cart.filter((prod) => prod.id !== id);
    setCart(productLess);
  };

  // función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
