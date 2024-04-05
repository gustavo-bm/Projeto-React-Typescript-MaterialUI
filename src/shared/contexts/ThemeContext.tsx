// somente através do contexto eu consigo compartilhar as informações do nosso tema
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'
import { LightTheme } from '../themes/Light'
import { DarkTheme } from '../themes/Dark'

interface ThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void
}
// define quais propriedades são compartilhadas

const ThemeContext = createContext({} as ThemeContextData)

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

interface IAppThemeProviderProps {
    children: React.ReactNode
}
export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, []) //array de dependencias

    // alternar o tema
    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme

        return DarkTheme
    }, [themeName])

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }} >
            <ThemeProvider theme={DarkTheme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default} >
                    {children}
                </Box>

            </ThemeProvider>
        </ThemeContext.Provider>
    )
}