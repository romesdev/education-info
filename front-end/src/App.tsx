import { createContext } from 'react'
import SchoolPage from './components/schools/page'
import './styles/main.css'

export const tt = createContext({} as {
  fnX: () => void,
  pp: string
})

function App() {
  const fnX = () => { console.log('e') }
  const pp = "teste"

  return (
    <tt.Provider value={{ fnX, pp }}>
      <SchoolPage></SchoolPage>
    </tt.Provider>
  )
}

export default App
