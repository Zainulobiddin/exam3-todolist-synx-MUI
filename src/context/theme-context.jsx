import { createContext, useState } from "react";

export const DarkContext = createContext()

export default function DarkProvider({children}) {
    const [theme, setTheme] = useState(false)
    return (
        <DarkContext.Provider value={{theme, setTheme}}>
            {children}
        </DarkContext.Provider>
    )
}