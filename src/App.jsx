import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage'
import moviesPage from './Pages/MoviesPage'
import movieDetailsPage from './Pages/MovieDetailsPage'
import NotFoundPage from './Pages/NotFoundPage'
import DefaultLayout from './layout/DefaultLayaout'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/movies' Component={moviesPage}></Route>
          <Route path='/movies/:id' Component={movieDetailsPage}></Route>
          <Route path='*' Component={NotFoundPage}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

