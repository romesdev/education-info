import { createContext } from 'react'
import SchoolPage from './components/schools/page'
import './styles/main.css'
import { BrowserRouter } from 'react-router-dom'

export const tt = createContext({} as {
  fnX: () => void,
  pp: string
})

function App() {
  const fnX = () => { console.log('e') }
  const pp = "teste"

  return (
    <tt.Provider value={{ fnX, pp }}>
      <BrowserRouter>
        <SchoolPage></SchoolPage>
      </BrowserRouter>
    </tt.Provider>
  )
}

export default App
