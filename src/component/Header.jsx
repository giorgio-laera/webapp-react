import { NavLink } from "react-router-dom";
import style from "../modules/Header.module.css"
function Header(){
    return (
        <header className={style.Header}>
            <img src="icon.png" alt="" />
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </header>
    )
}
export default Header;