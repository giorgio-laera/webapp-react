import { Link } from "react-router-dom";
import style from "../modules/HomePage.module.css"
function HomePage() {
  return (
    <div className={style.HomePage}>
      <h1> Il Giudice dei Libri </h1>
      <p>Il Giudice dei Libri e un piccolo sito dove chi vuole può recensire i suoi libri preferiti o no dando dei consigli ai nuovi utenti in cerca di consigli</p>
      <Link to="/books">Go to Book Page</Link>
    </div>
  );
}

export default HomePage;
