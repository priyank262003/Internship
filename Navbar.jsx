import { NavLink } from "react-router-dom"
import "./Navbar.css";

 const Navbar = () =>{

    return <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <h1>Port<span>folio</span></h1>
                </div>

                <nav>
                    <ul>
                        <li> <NavLink to="/">Home</NavLink> </li>
                        <li> <NavLink to="/contact"> Contact </NavLink> </li>
                        <li> <NavLink to="/education">Education</NavLink> </li>
                        <li> <NavLink to="/about"> About </NavLink> </li>
                    </ul>
                </nav>
            </div>
        </header>

        {/* <footer>
            <div className="last">
                <h1> Vyas Priyank</h1>
            </div>
        </footer> */}
        
        </>
}

export default Navbar;