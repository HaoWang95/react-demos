import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export let theme = createTheme({
  status: {
    danger: colors.red[500],
  },
  palette: {
    primary: {
      main: colors.teal[600],
    },
    secondary: {
      main: colors.deepPurple[500]
    },
  },
});
