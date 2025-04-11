import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useContext(CartContext)

  return (
    <div className="card p-4">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p className="fw-bold">${item.price}</p>

      <div className="d-flex align-items-center gap-3 mb-3">
        <input
          type="number"
          value={quantity}
          min={1}
          className="form-control w-25"
          onChange={e => setQuantity(Number(e.target.value))}
        />
        <button
          className="btn btn-success"
          onClick={() => addItem(item, quantity)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemDetail
