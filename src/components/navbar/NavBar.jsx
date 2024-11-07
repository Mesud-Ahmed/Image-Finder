import { AppBar, Toolbar, Typography, IconButton,Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Search from "../search/Search";

const Navbar = () => {
  return (
    <>

   
    <AppBar >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pixabay Image Finder
        </Typography>
        
      </Toolbar>
      
    </AppBar>
    
    </>
  );
};

export default Navbar;
