import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>,
)
