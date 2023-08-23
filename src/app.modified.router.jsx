import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import CardContainer from "./componentes/CardContainer"
import HeaderNav from "./componentes/HeaderNav"
import Foo from "./componentes/Foo"



const AppDos = () => {
    return (
    <>
        <Router>
            <HeaderNav />
            <Routes>
                <Route path="/foo" element={<Foo />} />
                <Route path="/tarjetas" element={<CardContainer />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        <Foo />
    </>
    )
}

export default AppDos