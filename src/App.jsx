import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BooksPage from './Pages/BooksPage'
import BookPage from './Pages/BookPage'
import NotFoundPage from './Pages/NotFoundPage'
import DefaultLayout from './layout/DefaultLayaout'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/books' Component={BooksPage}></Route>
          <Route path='/books/:id' Component={BookPage}></Route>
          <Route path='*' Component={NotFoundPage}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

