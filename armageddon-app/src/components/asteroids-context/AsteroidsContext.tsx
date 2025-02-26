import { createContext, FC, ReactNode, useState } from 'react'

export const AsteroidsContext = createContext(null)

type AsteroidsContextProviderProps = {
    children?: ReactNode
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children})=>{

    const [onlyDangerous, setOnlyDangerous] = useState<boolean>(false)
    const [distanceMode, setDistanceMode] = useState<boolean>(false)

    return <AsteroidsContext.Provider value={{onlyDangerous, setOnlyDangerous, distanceMode, setDistanceMode}}>
            {children}
        </AsteroidsContext.Provider>
}