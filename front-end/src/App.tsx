import { createContext } from 'react'
import SchoolPage from './components/schools/page'
import './styles/main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
