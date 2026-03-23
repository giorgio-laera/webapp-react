import { NavLink } from "react-router-dom";
import style from "../modules/Header.module.css"
function Header(){
    return (
        <header className={style.Header}>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/books">Books</NavLink>
        </header>
    )
}
export default Header;