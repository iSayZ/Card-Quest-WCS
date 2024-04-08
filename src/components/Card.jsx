import './Card.css'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function Card() {

    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
      setRating(rate)
    }

    return (
        <div className="card">
            <div className='btn-exit'><img src="../../exit.png" alt="" /></div>
            <div className="card-header">
                <img src="../../tavern.jpeg" alt="" /> 
            </div>       
            <div className="card-content">
                <div className='card-summary'>
                <h3>The Steam Tavern</h3>
                <p>
                    "The Steam Tavern" est un restaurant fictif au cœur d'un univers steampunk, offrant une expérience culinaire unique dans un décor rétro-futuriste orné d'engrenages et de tuyaux en cuivre. Le menu propose une fusion de plats traditionnels et de créations innovantes, accompagnés d'une sélection de boissons artisanales. Parfait pour une soirée spéciale ou un dîner entre amis.
                </p>
                </div>
                <div className='card-rating'>
                <p>Donnez votre avis :</p>
                <Rating onClick={handleRating}/>
            </div>
            </div>

        </div>
    )
}

export default Card;