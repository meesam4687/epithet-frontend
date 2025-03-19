import profileIcon from './assets/icons/profileIcon.svg'
import resetButton from './assets/icons/resetButton.svg'
function Navbar() {
    return (
      <div className="navbar">
        <div className="resetButton navbarButton clickable"><img className='buttonIcon' src={resetButton} /></div>
        <h1 className="navbarHeading">Epithet</h1>
        <div className="profileButton navbarButton clickable"><img className='buttonIcon' src={profileIcon} /></div>
      </div>
    )
  }
  
  export default Navbar
  