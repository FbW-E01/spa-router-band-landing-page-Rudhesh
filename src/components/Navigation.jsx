import { NavLink} from "react-router-dom"
import './Navigation.css'
export default function Navigation() {

    return(<>
    <NavLink exact to="/">SYSTEM OF A DOWN</NavLink>
     <ul className="navigation">
        
        <li><NavLink exact to="/vocals">VOCALS</NavLink> </li>
        <li><NavLink exact to="/guitar">GUITAR</NavLink> </li>
        <li><NavLink exact to="/bass">BASS</NavLink> </li>
        <li><NavLink exact to="/drums">DRUMS</NavLink> </li>


    </ul>
    </>
    )

}