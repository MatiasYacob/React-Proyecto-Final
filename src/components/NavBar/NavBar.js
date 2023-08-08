
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className="NavBar title">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className="Categories ">
                <NavLink to={`/category/celular`} className={({isActive})=> isActive? 'ActiveOption button': 'Option button'}>Celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({isActive})=> isActive? 'ActiveOption button': 'Option button'}>Tablet</NavLink>
                <NavLink to={`/category/notebook`} className={({isActive})=> isActive? 'ActiveOption button': 'Option button'}>Notebook</NavLink>
            </div>
            <CartWidget/>
            
        
        </nav>
    )
}
export default NavBar