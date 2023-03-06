import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useState } from "react";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import Books from "../../ui/admin/adminComponent/Catalog/Books";
import BookSets from "../../ui/admin/adminComponent/Catalog/BookSets";
import SurpriceBox from "../../ui/admin/adminComponent/Catalog/SurpriceBox";
import Tags from "../../ui/admin/adminComponent/Catalog/Tags";
import Reviews from "../../ui/admin/adminComponent/Catalog/Reviews";
import Merchandise from "../../ui/admin/adminComponent/Catalog/Merchandise";
import BookRequests from "../../ui/admin/adminComponent/Catalog/BookRequests";
import Books1 from "../../ui/admin/adminComponent/Catalog/Attributes/Books1";
import Publishers from "../../ui/admin/adminComponent/Catalog/Attributes/Publishers";
import Genre from "../../ui/admin/adminComponent/Catalog/Attributes/Genre";
import ConditionTypes from "../../ui/admin/adminComponent/Catalog/Attributes/ConditionTypes";
import CustomBox from "../../ui/admin/adminComponent/Catalog/CustomBox";
import EventsBox from "../../ui/admin/adminComponent/Catalog/Attributes/EventsBox";
import Billing from "../../ui/admin/adminComponent/Billing/Billing";
import Orders from "../../ui/admin/adminComponent/Sales/Orders";
import Shipments from "../../ui/admin/adminComponent/Sales/Shipments";
import ReturnRequests from "../../ui/admin/adminComponent/Sales/ReturnRequests";
import Wallet from "../../ui/admin/adminComponent/Sales/Wallet";
import FeedbackMessages from "../../ui/admin/adminComponent/Sales/FeedbackMessages";
import ShoppingcartsandWishlists from "../../ui/admin/adminComponent/Sales/ShoppingcartsandWishlists";
import CouponCodes from "../../ui/admin/adminComponent/Promotions/CouponCodes";
import Roles from "../../ui/admin/adminComponent/Customers/Roles";
import OnlineCustomers from "../../ui/admin/adminComponent/Customers/OnlineCustomers";
import Msg91 from "../../ui/admin/adminComponent/Configuration/Msg91";
import LiveChat from "../../ui/admin/adminComponent/Configuration/LiveChat";
import Instamojo from "../../ui/admin/adminComponent/Configuration/Instamojo";
import ISBN from "../../ui/admin/adminComponent/Configuration/ISBN";
import Maintenance from "../../ui/admin/adminComponent/System/Maintenance";
import SalesSummary from "../../ui/admin/adminComponent/Reports/SalesSummary";
import LowStock from "../../ui/admin/adminComponent/Reports/LowStock";
import BestSellers from "../../ui/admin/adminComponent/Reports/BestSellers";
import Booksneverpurchased from "../../ui/admin/adminComponent/Reports/Booksneverpurchased";
import RegisteredCustomers from "../../ui/admin/adminComponent/Reports/Customer Reports/RegisteredCustomers";
import Customersbyordertotal from "../../ui/admin/adminComponent/Reports/Customer Reports/Customersbyordertotal";
import Customersbynumberoforders from "../../ui/admin/adminComponent/Reports/Customer Reports/Customersbynumberoforders";
import { useDispatch, useSelector } from "react-redux";
import { setMenuData } from "../../redux/actions/adminAction";
import AddBook from "../../ui/admin/adminComponent/AddBook/AddBook";
import { Warehouse } from "@mui/icons-material";
import WareHouse from "../../ui/admin/adminComponent/Catalog/Attributes/WareHouse";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [ComanyName, setComanyName] = useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const menuData = useSelector((state) => state.admin.menuData);
  const dispatch = useDispatch();
  const buttonProps = (value) => ({
    selected: selectedIndex === value,
    onClick: () => {
      setSelectedIndex(value);

      dispatch(setMenuData(value));
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
    setComanyName("");
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setComanyName("KitabLovers");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#343a40" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {ComanyName}
          </Typography>
          <div
            style={{ textAlign: "right", justifyContent: "end", width: "100%" }}
          >
            {" "}
            <Button variant="contained">Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#343a40",
            color: "white",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <Typography
            variant="h6"
            noWrap
            sx={{ marginRight: "70px" }}
            component="div"
          >
            KitabLovers
          </Typography>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "lightgray" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "lightgray" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* First accordian */}
        <div>
          <Accordion
            style={{
              backgroundColor: "#343a40",
              color: "lightgray",
              padding: "0px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "lightgray" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ padding: "0px", margin: "0px" }}
            >
              <ListItem
                disablePadding
                sx={{ display: "block", padding: "0px", margin: "0px" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: open ? 0 : 1,
                      mr: open ? 3 : "auto",
                      ml: open ? 0 : 2,
                      justifyContent: "center",
                      color: "lightgray",
                    }}
                  >
                    <LibraryBooksRoundedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Catalog"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {[
                  "Books",
                  "Book Sets",
                  "Surprise Box",
                  "Tags",
                  "Reviews",
                  "Merchandise",
                  "Book Requests",
                ].map((text, index) => (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{ display: "block" }}
                    {...buttonProps(text)}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "left",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          ml: open ? -2 : 2,
                          justifyContent: "center",
                        }}
                      >
                        <AdjustRoundedIcon sx={{ color: "lightgray" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
                <div>
                  {/* first inner accordian */}
                  <Accordion
                    style={{
                      backgroundColor: "#343a40",
                      color: "lightgray",
                      border: "0px",
                      padding: "0px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon sx={{ color: "lightgray" }} />
                      }
                    >
                      <ListItem disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: open ? 0 : 1,
                              mr: open ? 3 : 5,
                              ml: open ? -4 : 9,
                              justifyContent: "center",
                              color: "lightgray",
                            }}
                          >
                            <AdjustRoundedIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary="Attributes"
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </AccordionSummary>
                    <AccordionDetails>
                      {[
                        "Books",
                        "Warehouse",
                        "Publishers",
                        "Genre",
                        "Condition Types",
                        "Custom Box",
                        "Events Box",
                      ].map((text, index) => (
                        <ListItem
                          key={text}
                          disablePadding
                          sx={{ display: "block" }}
                          {...buttonProps(text)}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 0,
                              justifyContent: open ? "initial" : "left",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                ml: open ? -4 : 2,
                                justifyContent: "center",
                              }}
                            >
                              <PanoramaFishEyeRoundedIcon
                                sx={{ color: "lightgray" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={text}
                              primaryTypographyProps={{
                                style: { whiteSpace: "normal" },
                              }}
                              sx={{ opacity: open ? 1 : 0 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* second accordian */}
        <div>
          <ListItem
            disablePadding
            sx={{ display: "block", height: "60px" }}
            {...buttonProps("Billing")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: open ? 0 : 1,
                  mr: open ? 3 : "auto",
                  ml: open ? 0 : -1,
                  justifyContent: "center",
                  color: "lightgray",
                }}
              >
                <ReceiptRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Billing"
                sx={{ opacity: open ? 1 : 0, color: "lightgray" }}
              />
            </ListItemButton>
          </ListItem>
        </div>
        {/* third accordian */}
        <div>
          <Accordion
            style={{
              backgroundColor: "#343a40",
              color: "lightgray",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "lightgray" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: open ? 0 : 1,
                      mr: open ? 3 : 5,
                      ml: open ? -2 : 6,
                      justifyContent: "center",
                      color: "lightgray",
                    }}
                  >
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sales"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              {[
                "Orders",
                "Shipments",
                "Return Requests",
                "Wallet",
                "Feedback Messages",
                "Shopping carts and Wishlists",
              ].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  {...buttonProps(text)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 0,
                      justifyContent: open ? "initial" : "left",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        ml: open ? -2 : 2,
                        justifyContent: "center",
                      }}
                    >
                      <AdjustRoundedIcon sx={{ color: "lightgray" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        style: { whiteSpace: "normal" },
                      }}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>

        {/* fourth accordian */}
        <div>
          <Accordion
            style={{
              backgroundColor: "#343a40",
              color: "lightgray",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "lightgray" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: open ? 0 : 1,
                      mr: open ? 3 : 5,
                      ml: open ? -2 : 6,
                      justifyContent: "center",
                      color: "lightgray",
                    }}
                  >
                    <LocalOfferOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promotions"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                {...buttonProps("Coupon Codes")}
              >
                <ListItemButton
                  sx={{
                    minHeight: 0,
                    justifyContent: open ? "initial" : "left",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      ml: open ? -2 : 2,
                      justifyContent: "center",
                    }}
                  >
                    <AdjustRoundedIcon sx={{ color: "lightgray" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Coupon Codes"
                    primaryTypographyProps={{ style: { whiteSpace: "normal" } }}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* fifth accordian */}
        <div>
          <Accordion
            style={{
              backgroundColor: "#343a40",
              color: "lightgray",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "lightgray" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {" "}
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: open ? 0 : 1,
                      mr: open ? 3 : 5,
                      ml: open ? -2 : 6,
                      justifyContent: "center",
                      color: "lightgray",
                    }}
                  >
                    <PeopleOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Customers"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              {["Roles", "Online Customers"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  {...buttonProps(text)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 0,
                      justifyContent: open ? "initial" : "left",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        ml: open ? -2 : 2,
                        justifyContent: "center",
                      }}
                    >
                      <AdjustRoundedIcon sx={{ color: "lightgray" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        style: { whiteSpace: "normal" },
                      }}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>

        {/* sixth accordian */}
        <div>
          <Accordion
            style={{
              backgroundColor: "#343a40",
              color: "lightgray",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "lightgray" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: open ? 0 : 1,
                      mr: open ? 3 : 5,
                      ml: open ? -2 : 6,
                      justifyContent: "center",
                      color: "lightgray",
                    }}
                  >
                    <SettingsApplicationsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Configuration"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              {["Msg91", "Live Chat", "Shipping", "Instamojo", "ISBN"].map(
                (text, index) => (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{ display: "block" }}
                    {...buttonProps(text)}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 0,
                        justifyContent: open ? "initial" : "left",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          ml: open ? -2 : 2,
                          justifyContent: "center",
                        }}
                      >
                        <AdjustRoundedIcon sx={{ color: "lightgray" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                          style: { whiteSpace: "normal" },
                        }}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </AccordionDetails>
          </Accordion>
        </div>
        {/* seventh accordian */}
        <div>
          <Accordion
            style={{
              backgroundColor: "#343a40",
              color: "lightgray",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "lightgray" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: open ? 0 : 1,
                      mr: open ? 3 : 5,
                      ml: open ? -2 : 6,
                      justifyContent: "center",
                      color: "lightgray",
                    }}
                  >
                    <DisplaySettingsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="System"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                {...buttonProps("Maintenance")}
              >
                <ListItemButton
                  sx={{
                    minHeight: 0,
                    justifyContent: open ? "initial" : "left",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      ml: open ? -2 : 2,
                      justifyContent: "center",
                    }}
                  >
                    <AdjustRoundedIcon sx={{ color: "lightgray" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Maintenance"
                    primaryTypographyProps={{ style: { whiteSpace: "normal" } }}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* eight accordian */}
        <div>
          <Accordion
            style={{
              backgroundColor: "#343a40",
              color: "lightgray",
              padding: "0px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "lightgray" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ padding: "0px", margin: "0px" }}
            >
              <ListItem
                disablePadding
                sx={{ display: "block", padding: "0px", margin: "0px" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: open ? 0 : 1,
                      mr: open ? 3 : "auto",
                      ml: open ? 0 : 2,
                      justifyContent: "center",
                      color: "lightgray",
                    }}
                  >
                    <QueryStatsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reports"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {[
                  "Sales Summary",
                  "Low Stock",
                  "Best Sellers",
                  "Books never purchased",
                ].map((text, index) => (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{ display: "block" }}
                    {...buttonProps(text)}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "left",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          ml: open ? -2 : 2,
                          justifyContent: "center",
                        }}
                      >
                        <AdjustRoundedIcon sx={{ color: "lightgray" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                          style: { whiteSpace: "normal" },
                        }}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
                <div>
                  {/* Eighth inner accordian */}
                  <Accordion
                    style={{
                      backgroundColor: "#343a40",
                      color: "lightgray",
                      border: "0px",
                      padding: "0px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon sx={{ color: "lightgray" }} />
                      }
                    >
                      <ListItem disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: open ? 0 : 1,
                              mr: open ? 3 : 5,
                              ml: open ? -4 : 9,
                              justifyContent: "center",
                              color: "lightgray",
                            }}
                          >
                            <AdjustRoundedIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary="Customer Reports"
                            primaryTypographyProps={{
                              style: { whiteSpace: "normal" },
                            }}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </AccordionSummary>
                    <AccordionDetails>
                      {[
                        "Registered Customers",
                        "Customers by order total",
                        "Customers by number of orders",
                      ].map((text, index) => (
                        <ListItem
                          key={text}
                          disablePadding
                          sx={{ display: "block" }}
                          {...buttonProps(text)}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 0,
                              justifyContent: open ? "initial" : "left",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                ml: open ? -4 : 2,
                                justifyContent: "center",
                              }}
                            >
                              <PanoramaFishEyeRoundedIcon
                                sx={{ color: "lightgray" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={text}
                              primaryTypographyProps={{
                                style: { whiteSpace: "normal" },
                              }}
                              sx={{ opacity: open ? 1 : 0 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "lightgrey",
          height: "160vh",
        }}
      >
        <DrawerHeader />

        {/* rendering new page onClick on SideBar */}

        {menuData === "Books" && <Books />}
        {menuData === "addNewBook" && <AddBook />}
        {menuData === "Warehouse" && <WareHouse />}
        {menuData === "Book Sets" && <BookSets />}
        {menuData === "Surprise Box" && <SurpriceBox />}
        {menuData === "Tags" && <Tags />}
        {menuData === "Reviews" && <Reviews />}
        {menuData === "Merchandise" && <Merchandise />}
        {menuData === "Book Requests" && <BookRequests />}
        {menuData === "Books1" && <Books1 />}
        {menuData === "Publishers" && <Publishers />}
        {menuData === "Genre" && <Genre />}
        {menuData === "Condition Types" && <ConditionTypes />}
        {menuData === "Custom Box" && <CustomBox />}
        {menuData === "Events Box" && <EventsBox />}
        {menuData === "Billing" && <Billing />}
        {menuData === "Orders" && <Orders />}
        {menuData === "Shipments" && <Shipments />}
        {menuData === "Return Requests" && <ReturnRequests />}
        {menuData === "Wallet" && <Wallet />}
        {menuData === "Feedback Messages" && <FeedbackMessages />}
        {menuData === "Shopping carts and Wishlists" && (
          <ShoppingcartsandWishlists />
        )}
        {menuData === "Coupon Codes" && <CouponCodes />}
        {menuData === "Roles" && <Roles />}
        {menuData === "Online Customers" && <OnlineCustomers />}
        {menuData === "Msg91" && <Msg91 />}
        {menuData === "Live Chat" && <LiveChat />}
        {menuData === "Shipping" && <Shipments />}
        {menuData === "Instamojo" && <Instamojo />}
        {menuData === "ISBN" && <ISBN />}
        {menuData === "Maintenance" && <Maintenance />}
        {menuData === "Sales Summary" && <SalesSummary />}
        {menuData === "Low Stock" && <LowStock />}
        {menuData === "Best Sellers" && <BestSellers />}
        {menuData === "Books never purchased" && <Booksneverpurchased />}
        {menuData === "Registered Customers" && <RegisteredCustomers />}
        {menuData === "Customers by order total" && <Customersbyordertotal />}
        {menuData === "Customers by number of orders" && (
          <Customersbynumberoforders />
        )}
      </Box>
    </Box>
  );
}
