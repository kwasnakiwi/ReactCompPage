import HomePage from './HomePage'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import Uslugi from './Uslugi'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/uslugi' element={<Uslugi />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
