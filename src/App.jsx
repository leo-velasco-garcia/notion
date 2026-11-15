import Ventana from "./components/ventana/Index"
import Nav from "./components/nav/Index"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"


const App = () => {
  const { navAbierto } = useContext(AppContext);

  return (
    <div className={`app${navAbierto ? "" : " app--nav-cerrado"}`}>
        <Nav></Nav>
      <Ventana>
      </Ventana>
    </div>
  )
}

export default App