import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Conta } from "./pages/Conta/Conta"
import { ContaInfo } from "./pages/ContaInfo/ContaInfo"
import { useContext } from "react"
import { AppContext } from "./components/AppContext/AppContext"

export const RotasPrincipais = () => {
  const {logado} = useContext(AppContext)

  return (
    <Routes>
      <Route path='/' element={<Home/>} />  
      <Route path='/conta/:id' element={ logado ? <Conta/> : <Home/>} />
      <Route path='/conta-info' element={<ContaInfo/>}/>
    </Routes>
  )
}