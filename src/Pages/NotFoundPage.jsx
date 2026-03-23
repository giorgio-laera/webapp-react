import { Link } from "react-router-dom"
function NotFoundPage() {
    return (
        <>
            <h1>Pagina non trovata</h1>
            <Link to="/">Torna alla HomePage</Link>
        </>
    )
}
export default NotFoundPage;