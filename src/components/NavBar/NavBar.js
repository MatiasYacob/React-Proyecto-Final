
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className="NavBar title">
            <Link to='/'>
                <h3>Distribuidora Del Sol</h3>
            </Link>
            <div className="Categories ">
                <NavLink to={`/categoria/5Lts`} className={({isActive})=> isActive? 'ActiveOption button': 'Option button'}>5LTs</NavLink>
                <NavLink to={`/categoria/20Lts`} className={({isActive})=> isActive? 'ActiveOption button': 'Option button'}>20Lts</NavLink>
                <NavLink to={`/`} className={({isActive})=> isActive? 'ActiveOption button': 'Option button'}>Todo</NavLink>
            </div>
            <CartWidget/>
            
        
        </nav>
    )
}
export default NavBar