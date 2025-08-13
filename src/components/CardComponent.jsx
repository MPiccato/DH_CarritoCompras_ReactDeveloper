import { useState } from "react"
import "../styles/CardComponent.css";


export const CardComponent = ({image, title, description, price}) => {
  
    const [added, setAdded]=useState(false)

    const addedProduct = () => {
        setAdded(!added)
       
    }


    return (


    <div className="card">

        <img src={image} alt={title} className='card-img' />

        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price} USD</p>

            { 
                added ? <button 
                            className="remove-product"
                            type="button"
                            onClick={addedProduct}
                            >
                            Quitar del carrito
                        </button>
                : <button 
                    className="add-product"
                    type="button"
                    onClick={addedProduct}>
                    Agregar al carrito

                </button>
            }

        </div>
        
    </div>
  )
}
