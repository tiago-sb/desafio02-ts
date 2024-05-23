import { createContext, useEffect, useState } from "react"
import { IAppContext } from "./types"
import { getAllLocalStorage } from "../../services/storage"

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [logado, setLogado] = useState<boolean>(false)
  
  const storage = getAllLocalStorage()

  useEffect(() => {
    if(storage){
      const { login } = JSON.parse(storage)
      setLogado(login)
    }
  }, [])

  

  const user = 'tiago'
 
  return(
    <AppContext.Provider value={{ user, logado, setLogado }}>
      { children }
    </AppContext.Provider>
  )
}