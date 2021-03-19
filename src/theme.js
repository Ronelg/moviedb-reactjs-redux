import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { blueGrey, blue } from "@material-ui/core/colors";

// colors
const primary = blueGrey[900];
const secondary = blue[700];
const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, .5)";
const warningDark = "rgba(253, 200, 69, .7)";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  warning: {
    light: warningLight,
    main: warningMain,
    dark: warningDark,
  },
});

export default responsiveFontSizes(theme);
