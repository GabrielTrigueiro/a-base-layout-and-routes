import { Box, ThemeProvider } from "@mui/material"
import { DefaultTheme } from "../Theme/DefaultTheme"

export const AppThemeProvider: React.FC = ({children}) => {
    return(
        <ThemeProvider theme={DefaultTheme}>
            <Box>
                {children}
            </Box>
        </ThemeProvider>
    )
}