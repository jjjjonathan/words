import { createTheme } from "@mui/material";
import { ibarra, prompt } from "./fonts";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#9E422E",
      main: "#C95C44",
    },
    background: {
      default: "#E3E4DB",
    },
  },
  typography: {
    fontFamily: ibarra.style.fontFamily,
    button: {
      textTransform: "none",
      fontFamily: prompt.style.fontFamily,
    },
  },
});

export default theme;
