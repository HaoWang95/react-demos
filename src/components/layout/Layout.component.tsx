import { createTheme, Theme, ThemeProvider, PaletteMode } from "@mui/material";
import * as React from "react";
import {theme as preTheme} from "../../mui-theme/theme";
import Footer from "../footer/Footer.component";
import Header from "../header/Header.component";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {toggleLight, toggleDark} from "../../reducers/ThemeReducer"

type LayoutProps = {
  children?: React.ReactNode;
};

let Layout = ({ children }: LayoutProps) => {
  // that's why we defined RootState in store.ts!!
  let themeState = useSelector<RootState, string>((state) => state.theme.mode);
  let themeDispatch = useDispatch();
  let theme = React.useMemo<Theme>(
    () => createTheme({
      ...preTheme,
      palette: {
        mode: themeState as PaletteMode
      }
    }), [themeState]
  )

  let themeToggleHandler = React.useCallback(() => {
    if(themeState === 'light'){
      themeDispatch(toggleDark())
    }else{
      themeDispatch(toggleLight())
    }
  }, [themeState])

  return (
    <ThemeProvider theme={theme}>
      <Header themeToggleHandler={themeToggleHandler}/>
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
