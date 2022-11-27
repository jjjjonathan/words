import { createTheme } from "@mui/material";
import { Ibarra_Real_Nova } from "@next/font/google";

//     --color-white: #E3E4DB;
//     --color-black: #000000;
//     --color-red: #C95C44;
//     --color-dark-red: #9E422E;

export const ibarra = Ibarra_Real_Nova({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      dark: "#9E422E",
      main: "#C95C44",
    },
  },
  typography: {
    fontFamily: ibarra.style.fontFamily,
  },
});

export default theme;
