import {ThemeProvider} from 'styled-components'

const theme = {
  colors: {
    background: "#205e3b",
    text: "#FFFFFF",
    primary: "#e1e1e6",
  },
};

export const TestThemeWrapper = ({children}) => {
return (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
}