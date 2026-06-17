import { createContext, PropsWithChildren, useContext } from "react";

interface ThemeChangerContextType{
    currentTheme: 'light' | 'dark';
    isSystemMode: boolean;

    toggleTheme: () => void;
    setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Custom Hook para acceder al ThemeChangerContext
export const useThemeChanger = () => {
    const themeChanger = useContext(ThemeChangerContext);

    return themeChanger;
}

//Provider 
export const ThemeChangerProvider = ({children}: PropsWithChildren) =>{
  
    return (
        <ThemeChangerContext.Provider 
        value={{
            currentTheme: 'light',
            isSystemMode: false,
            toggleTheme: async() => {

            },
            setSystemTheme: async() => {
                
            }
        }}>
            {children}
        </ThemeChangerContext.Provider>
    )
}