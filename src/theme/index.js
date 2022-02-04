import { createTheme } from "@mui/material/styles";

const theme = createTheme({
});

theme.components = {
  MuiCssBaseline: {
  styleOverrides: {

    html: {
      fontSize: `${theme.htmlFontSize}px`,
    },
    body: {
      backgroundColor: theme.palette.background.page,
      color: theme.palette.text.default,
    },
  }
  }
}

export default theme;
