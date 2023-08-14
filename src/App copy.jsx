import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardContainer from './componentes/CardContainer'
import Foo from './componentes/Foo'
import HeaderNav from './componentes/HeaderNav'

function App() {
  return (
    <>
      <HeaderNav />
      <CardContainer />
      <Foo />
    </>
  )
}

export default App
