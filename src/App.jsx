import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import CardContainer from "./componentes/CardContainer"

import UserCard from "./componentes/Card"
const Home = () => (
  <div> <h3>TKTL notes app</h3> </div>
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

  return (
    <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/notes">users</Link>
        <Link style={padding} to="/users">CardContainer</Link>
      </div>

      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<CardContainer />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </Router>
  )
}

export default App