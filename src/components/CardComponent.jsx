import { useState } from "react"


export const CardComponent = ({image, title, description, price}) => {
  
    const [added, setAdded]=useState(false)
    return (


    <div className="card">

        <img src={image} alt={title} className='card-img' />

        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}</p>

            { 
                added ? <button 
                            className="remove-product"
                            type="button"
                            >
                            Quitar del carrito
                        </button>
                : <button 
                    className="add-prodcit"
                    type="button">
                    Agregar al carrito

                </button>
            }

        </div>
        
    </div>
  )
}
