import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import React, { useState } from "react";
import { Logout } from "@mui/icons-material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ffc919",
    },
  },
});
const hoverx = {
  "&:hover": {
    border: "1px solid",
    borderRadius: 1,
  },
};
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const [openCategory, setOpenCategory] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  function Category(e) {
    if (openCategory !== e.currentTarget) {
      setOpenCategory(e.currentTarget);
    }
  }
  function handleClose() {
    setAnchorEl(null);
    setOpenCategory(null);
  }
  const categoryList = [
    {
      name: "POETRY",
    },
    {
      name: "SCIENCE FICTION",
    },
    {
      name: "INVESMENTS",
    },
    {
      name: "BIOGRAPHY & AUTOBIOGRAPHY",
    },
    { name: "HEALTH, FAMILY & PERSONAL" },
    { name: "KIDS" },
    { name: "TRAVEL & TOURISM" },
    { name: "MORE" },
  ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <StyledToolbar>
          <Box sx={{ ml: { lg: 4, md: 4, sm: 3, xs: 0 }, pt: 0.5 }}>
            <img
              src="https://kitablovers.com/front/images/logo/logo.png"
              width="65"
              alt="kitab lovers logo"
            ></img>
          </Box>
          <Paper
            component="form"
            sx={{
              p: " 0.5px",
              display: "flex",
              alignItems: "center",
              width: { md: 700, sm: 400, xs: 200 },
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, width: 300 }}
              placeholder="Search...."
              inputProps={{ "aria-label": "search...." }}
            />
          </Paper>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <PersonIcon
                fontSize="large"
                sx={{
                  mt: 0.5,
                  alignItems: "center",
                  display: { xs: "none", sm: "none", md: "none", lg: "block" },
                }}
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose} sx={{ width: 300 }}>
                  <Avatar /> LOGIN / SIGNUP
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Your Orders</MenuItem>
                <MenuItem onClick={handleClose}>Your Wishlist</MenuItem>
                <MenuItem onClick={handleClose}>Your Wallet</MenuItem>
                <MenuItem onClick={handleClose}>Your Return</MenuItem>
                <MenuItem onClick={handleClose}>Requests</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  {" "}
                  <Logout fontSize="small" /> SIGNOUT
                </MenuItem>
              </Menu>
              {/* Category */}
              <Menu
                id="category_menu"
                anchorEl={openCategory}
                open={Boolean(openCategory)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {categoryList.map((el) => (
                  <MenuItem onClick={handleClose}>{el.name}</MenuItem>
                ))}
              </Menu>

              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{
                  display: { xs: "none", sm: "none", md: "none", lg: "block" },
                }}
              >
                Profile
              </Typography>
            </Box>
            <Box
              sx={{
                ml: 2,
                mt: 0.5,
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
              }}
            >
              <FavoriteIcon fontSize="large" />
              <Typography variant="subtitle2" fontWeight="bold" mr="2px">
                Wishlist
              </Typography>
            </Box>
            <Box
              sx={{
                ml: 2,
                mt: 0.5,
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
              }}
            >
              <ShoppingCartIcon fontSize="large" />
              <Typography variant="subtitle2" fontWeight="bold">
                Cart
              </Typography>
            </Box>
          </Box>
        </StyledToolbar>
      </AppBar>
      <Box
        sx={{
          backgroundColor: "black",
          height: 40,
          //display: "flex",
          color: "#FAF5E9",
          display: { xs: "none", sm: "none", md: "none", lg: "flex" },
          justifyContent: "center",
        }}
      >
        <Button
          className="text-white"
          onClick={Category}
          onMouseOver={Category}
          aria-owns={openCategory ? "category_menu" : undefined}
          aria-haspopup="true"
        >
          Categories
        </Button>
        <div className="vr "></div>
        <Button className="text-white">New Arrivals</Button>
        <div className="vr "></div>
        <Button className="text-white">Best Sellers</Button>
        <div className="vr "></div>
        <Button className="text-white"> Book Sets</Button>
        <div className="vr "></div>
        <Button className="text-white"> Merchandise</Button>
        <div className="vr "></div>
        <Button className="text-white"> Load the Box</Button>
        <div className="vr "></div>
        <Button className="text-white">Wholesale</Button>
        <div className="vr "></div>
        <Button className="text-white"> Book Requests</Button>

        <div className="vr "></div>
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
        elevation={15}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Menu"
            icon={<WidgetsIcon />}
            onClick={() => setIsDrawerOpen(true)}
          />
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box
              sx={{
                width: 300,
                height: 70,
                bgcolor: "#ffc919",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography color="black" variant="h4" fontWeight="bold">
                Menu
              </Typography>
            </Box>
            <Box
              sx={{
                height: 700,
                
              }}
            >
              <Typography variant="h6" color="black" ml="30px" mt="15px"
               sx={{ "&:hover": {
                  fontWeight:"bold"
                },}}
              >
                New Arrivals
              </Typography>
              <Typography variant="h6" color="black" ml="30px" mt="7px">
                Best Sellers
              </Typography>
              <Typography variant="h6" color="black" ml="30px" mt="7px">
                Book Sets
              </Typography>
              <Typography variant="h6" color="black" ml="30px" mt="7px">
                Merchandise
              </Typography>
              <Typography variant="h6" color="black" ml="30px" mt="7px">
                Load the Box
              </Typography>
              <Typography variant="h6" color="black" ml="30px" mt="7px">
                Book Requests
              </Typography>
            </Box>
          </Drawer>

          <BottomNavigationAction label="Category" icon={<ListIcon />} />
          <BottomNavigationAction
            label="Account"
            icon={<AccountCircleIcon />}
          />
          <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
          <BottomNavigationAction label="Wishlist" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
};

export default Header;
