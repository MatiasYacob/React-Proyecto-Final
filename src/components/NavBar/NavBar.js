import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <nav className="container">
                <h3 className="title">Distribuidora Del Sol</h3>
                    <div className="columns">
                        <div className="column is-2">
                        <button className="button is-dark">Empresa</button>
                        </div>
                        <div className="column is-2">
                        <button className="button is-dark">Contacto</button>
                        </div>
                        <div className="column is-2">
                        <button className="button is-dark">Catalogo</button>
                        </div>
                        <div className="column is-2">
                        <button className="button is-dark">Quiero Ser Cliente</button>
                        </div>
                        <div className="column is-3">
                        </div>
                        <CartWidget/>
                        
                    </div>
            
                
            </nav>
        </nav>
    )
}
export default NavBar