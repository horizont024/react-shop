import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/Context'
import './Shop.css'
import axios from 'axios'
import { add } from '../../context/Context'

const Shop = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const gState = useContext(ShopContext)
  const dispatch = gState.dispatch

  return (
    <div className="shop">
      {data.map((product, index) => {
        product.quantity = 1
        return (
          <div className="product" key={index}>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <h3>{product.price} $</h3>

            <button
              className="addToCartBttn"
              onClick={() => dispatch({ type: add, payload: product })}
            >
              To cart
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Shop
