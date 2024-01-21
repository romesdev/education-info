import { createContext } from 'react'
import SchoolPage from './components/schools/page'
import './styles/main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchoolForm from './components/form/Schools/form'

export const tt = createContext({} as {
  fnX: () => void,
  pp: string
})

function App() {
  // const fnX = () => { console.log('e') }
  // const pp = "teste"

  return (
    // <tt.Provider value={{ fnX, pp }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchoolPage />} />
        <Route path="/registro" element={<SchoolForm />} />
      </Routes>

    </BrowserRouter>
    // </tt.Provider>
  )
}

export default App
