// rainbowkit
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
// @mui
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { I18N, CHAINS } from "../config";
//
import palette from "./palette";
import shadows from "./shadows";
import breakpoints from "./breakpoints";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import { customShadows } from "./customShadows";
import componentsOverride from "./overrides";
import rainbowkitTheme from "./rainbowkit";

// ----------------------------------------------------------------------

const theme = createTheme(
  {
    palette: palette.light,
    shape: { borderRadius: 6 },
    typography,
    breakpoints,
    shadows: shadows.light,
    customShadows: customShadows.light,
  },
  I18N.defaultLang.systemValue,
);

theme.components = componentsOverride(theme);

const rainbowKitTheme = rainbowkitTheme(theme);

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <MUIThemeProvider theme={theme}>
      <RainbowKitProvider chains={CHAINS} theme={rainbowKitTheme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </RainbowKitProvider>
    </MUIThemeProvider>
  );
}
