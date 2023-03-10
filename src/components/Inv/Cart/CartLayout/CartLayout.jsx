import React from "react"
import { useCart } from "../../../../store"
import CartItem from "./CartItem/CartItem"

const CartLayout = () => {
  const cart = useCart((state) => state.cart)
  return (
    <>
      {cart.map((e) => (
        <CartItem key={e.id} data={e} />
      ))}
    </>
  )
}

export default CartLayout
