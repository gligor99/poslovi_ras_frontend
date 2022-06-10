import { createTheme } from "@mui/material/styles";

const colors = {
  neutralgrey: "#64748B",
  lightgrey: "#E8E8E8",
  darkgrey: "#222831",
  tomato: "#F05454",
  darkblue: "#30475E",
  error: "#D72323",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.tomato,
    },
    secondary: {
      main: colors.darkgrey,
    },
    background: {
      main: colors.lightgrey,
    },
    neutral: {
      main: colors.neutralgrey,
      contrastText: "#fff",
    },
    error: {
      main: colors.error,
    },
  },
});

export default theme;
