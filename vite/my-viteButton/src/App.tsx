import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GlobalStyle from "./styles/GlobalStyle";
import ExampleComponent from "./components/ExampleComponent";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ExampleComponent />
  </ThemeProvider>
);

export default App;
