import Navbar from "./components/Navbar";

import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import TopBar from "./components/TopBar";
import MainContent from "./containers/MainContent";

const theme = createTheme({
  typography: {
    fontFamily: "'Bitter', serif",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <Container>
        <Navbar />
        <MainContent />
      </Container>
    </ThemeProvider>
  );
};

export default App;
