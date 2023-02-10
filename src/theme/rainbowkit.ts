import { Theme } from "@mui/material/styles";
import { lightTheme } from "@rainbow-me/rainbowkit";

export default function rainbowkitTheme<T extends Theme>(theme: T) {
  return lightTheme({
    accentColor: theme.palette.primary.main,
    accentColorForeground: theme.palette.background.paper,
    borderRadius: "medium",
    fontStack: "system",
  });
}
