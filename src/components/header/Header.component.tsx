import {
  AppBar,
  FormControlLabel,
  Grid,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

interface HeaderProps {
  themeToggleHandler(): void
}

let Header = ({themeToggleHandler}: HeaderProps) => {
  return (
    // the appbar needs to be set to static or it will cover page content
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={8}>
           <Typography
            variant="h6" noWrap
           >AppLogo</Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel 
              label="Change Theme"
              control={<Switch color="secondary" onChange={themeToggleHandler} />}
            />
            
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
