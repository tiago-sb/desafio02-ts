import { createContext, useState } from "react"
import { IAppContext } from "./types"

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [logado, setLogado] = useState<boolean>(false)
  
  const user = 'tiago'
 
  return(
    <AppContext.Provider value={{ user, logado, setLogado }}>
      { children }
    </AppContext.Provider>
  )
}