import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import CardContainer from "./componentes/CardContainer"
import UserCard from "./componentes/Card"
import './componentes/headernav.css'
import './componentes/card.css'
import Foo from "./componentes/Foo"
import AutoContainer from "./componentes/Pimbas"



const Home = () => (
  <div> <h3>Cosas del inicio, slider, secciones, etc</h3> </div>
)

const Notes = () => (
  <div> <h3>Notes</h3>
    <UserCard /></div>
)

const Users = () => (
  <div> <h3>Users</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis neque iusto nemo sapiente ratione obcaecati voluptate ab repellendus dolorum voluptates laboriosam labore cumque repellat sit, fugit magni. Rerum, sed.</p> </div>
)
const App = () => {

  const padding = {
    padding: 5

  }

  return (<>
  
    <Router>
    
      <header className='header__nav'>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/usuarios">users</Link>
        <Link style={padding} to="/tarjetas">CardContainer</Link>
      </div>
      </header>

      <Routes>
        <Route path="/usuarios" element={<AutoContainer />} />
        <Route path="/tarjetas" element={<CardContainer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    
    </Router>
    <Foo />
    </>
  )
}

export default App