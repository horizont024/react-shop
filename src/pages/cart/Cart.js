import { useContext } from 'react'
import { ShopContext } from '../../context/Context'
import './Cart.css'

const Cart = () => {
  const throughState = useContext(ShopContext)
  const state = throughState.state
  const dispatch = throughState.dispatch

  const summ = state.reduce((sum, product) => {
    return sum + product.price * product.quantity
  }, 0)
  return (
    <div className="cart">
      {state.map((product, index) => {
        return (
          <div className="cartItems" key={index}>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <p>${Math.round(product.quantity * product.price * 100) / 100}</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: 'enlarge', payload: product })}
              >
                +
              </button>
              <p>{product.quantity}</p>
              <button
                onClick={() => {
                  if (product.quantity > 1) {
                    dispatch({ type: 'reduction', payload: product })
                  } else {
                    dispatch({ type: 'delete', payload: product })
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
        )
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>${Math.round(summ * 100) / 100}</h2>
        </div>
      )}
    </div>
  )
}

export default Cart
