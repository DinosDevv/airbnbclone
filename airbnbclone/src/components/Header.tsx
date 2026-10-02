function Header() {
  return(
    <>
      <header>
        <div className="logo">
          <a href="/">AirBnb</a>
        </div>
        <div className="nav">
          <a href="/all">All</a>
          <a href="/homes">Homes</a>
          <a href="/experiences">Experiences</a>
          <a href="/services">Services</a>
        </div>
        <div className="profile">
          <a href="#">Become a host</a>
          <a href="#">Icon</a>
          <a href="#">Burger</a>
        </div>
      </header>

    </>
  )
}

export default Header