import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import HomesPage from './pages/HomesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/homes" element={ <HomesPage /> } />
    </Routes>
  )
}

export default App
