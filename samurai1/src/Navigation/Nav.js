import "./Nav.css" ;
import {AiOutlineShoppingCart} from "react-icons/ai"




 function Nav() {
  return (
    <nav>
      <div className="profil-container">
       <a href="#">
        <AiOutlineShoppingCart  className="nav-icons"/>
       </a>
      </div>
    </nav>
  )
}

export default Nav;