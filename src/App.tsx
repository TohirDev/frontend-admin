
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/auth/login'
import RegistrationPage from './pages/auth/registeration'
import HomePage from './pages/home'
import PageNotFound from './pages/404'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegistrationPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App
