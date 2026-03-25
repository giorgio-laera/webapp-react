import { Link } from "react-router-dom";
import style from "../modules/HomePage.module.css"
function HomePage() {
  return (
    <div className={style.HomePage}>
      <h1> Il Giudice dei Film </h1>
      <p>Il Giudice dei Film e un piccolo sito dove chi vuole può recensire i suoi Fiml preferiti o no dando dei consigli ai nuovi utenti in cerca di consigli</p>
      <Link to="/movies">vai alla lista dei film</Link>
    </div>
  );
}

export default HomePage;
