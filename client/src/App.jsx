import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home/HomePage'
import { Analysis } from './pages/Analysis/Analysis'
import { LoginSignup } from './pages/LoginSignup/LoginSignup'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/analysis' element={<Analysis/>}/>
      <Route path='/login-signup' element={<LoginSignup/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
