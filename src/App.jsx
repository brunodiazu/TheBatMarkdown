import React, { useState } from "react";
import "./styles/App.css";

import Grid from "@material-ui/core/Grid";
import TheBatAppBar from "./components/AppBar";
import Paper from "@material-ui/core/Paper";
import {
  createMuiTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

function App() {
  const themeDark = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#DABF62",
      },
    },
  });

  const themeLight = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#0A0C1B",
      },
    },
  });

  /* Function to change using the hook */
  const toggleDarkMode = () => {
    setactualTheme(
      actualTheme.palette.type === "dark" ? themeLight : themeDark
    );
  };

  const isDarkMode = () => actualTheme.palette.type === "dark" ? true : false;

  /* Hook to change theme*/
  const [actualTheme, setactualTheme] = useState(themeLight);

  return (
    <ThemeProvider theme={actualTheme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <TheBatAppBar changeTheme={toggleDarkMode} isDarkMode={isDarkMode}/>
          <Typography variant="h1">HOLAAA</Typography>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
