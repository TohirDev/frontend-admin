import { ReactNode, useMemo } from "react";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import typography from "./typography";

type ThemeProvider = {
  children: ReactNode;
};

export default function CustomThemeProvider({ children }: ThemeProvider) {
  const themeOptions = useMemo(
    () => ({
      typography,
    }),
    []
  );
  const theme = createTheme(themeOptions);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
