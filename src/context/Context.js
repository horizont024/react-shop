import { createContext, useReducer } from 'react'

export const add = 'add'
export const enlarge = 'enlarge'
export const reduction = 'reduction'
export const deleteProduct = 'delete'

export const ShopContext = createContext()
export const Context = (props) => {
  const reducer = (state, action) => {
    if (action.type === add) {
      const temporState = state.filter(
        (product) => action.payload.id === product.id
      )
      if (temporState.length > 0) {
        return state
      } else {
        return [...state, action.payload]
      }
    }

    if (action.type === enlarge) {
      const temporState1 = state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 }
        } else {
          return product
        }
      })
      return temporState1
    }
    if (action.type === reduction) {
      const temporState2 = state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity - 1 }
        } else {
          return product
        }
      })
      return temporState2
    }
    if (action.type === deleteProduct) {
      const temporState3 = state.filter(
        (product) => product.id !== action.payload.id
      )
      return temporState3
    } else {
      return state
    }
  }
  const [state, dispatch] = useReducer(reducer, [])
  const contextValue = { state, dispatch }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
