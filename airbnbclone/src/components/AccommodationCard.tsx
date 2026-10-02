import { useState } from "react"

function AccommodationCard({ 
  location, 
  starting_date, 
  ending_date, 
  price, 
  stars 
} : { 
  location: string, 
  starting_date: string, 
  ending_date: string, 
  price: number, 
  stars: number 
} ) {

  const [heartState, setHeartState] = useState(false) // false = not-hearted and true = hearted 
  
  let color = "#000000"

  if(heartState) color = "red"; else color = "gray"

  return(
    <>
      <div className="accommodation_card">
        <div className="img-placeholder">
          <img src="/condo.jpg" alt="" />
        </div>

        <div className="condo_info">

          <p>Condo in {location}</p>
          <p>{starting_date} - {ending_date}, Business Host</p>
          <p>{price}€ - {stars} ✮
          </p>
          <div style={{ backgroundColor: color }}className="heart" onClick={() => setHeartState(!heartState)}></div>
        </div>
      </div>
    </>
  )

}

export default AccommodationCard