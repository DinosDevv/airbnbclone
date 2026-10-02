import AccommodationCard from "../components/AccommodationCard"

function HomePage() {
  return (
    <>
      <AccommodationCard location="Thessaloniki" starting_date="30 Oct" ending_date="1 Nov" price={270} stars={4.32}/>
    </>
  )
}

export default HomePage