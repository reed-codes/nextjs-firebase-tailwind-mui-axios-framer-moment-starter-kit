import { useState } from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Nav = () => {
  const minWidth1200px = useMediaQuery("(min-width:1200px)");

  return (
    <Box
      sx={{
        height: "60px",
        width: "100%",
        position: "fixed",
        display: "flex",
        background: "#1a1a1a",
        zIndex: 1000,
        boxShadow: "1px 0 15px 1px rgba(0,0,0,.1)",
      }}
    >
      {minWidth1200px && <WideScreenNavbar />}
      {!minWidth1200px && <SmallScreenNavBar />}
    </Box>
  );
};

const NAV_TAB_STYLE = {
  minWidth: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff;",
  borderRadius: 0,
};

const NavTabLink = ({ title, route }) => {
  return (
    <Link href={route}>
      <a>
        <Button sx={NAV_TAB_STYLE}>{title}</Button>
      </a>
    </Link>
  );
};

const WideScreenNavbar = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", pl: 2, pr: 2 }}>
      <Box
        sx={{
          height: "100%",
          width: "120px",
          fontWeight: 700,
          fontSize: "25px",
          padding: 2,
        }}
      >
        <Link href="/">
          <a
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="./logo.png"
              style={{
                height: "100%",
                objectFit: "contain",
              }}
              alt="logo"
            />
          </a>
        </Link>
      </Box>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <NavTabLink title="Home" route="/" />
        <NavTabLink title="About Us" route="/#about-us" />
        <NavTabLink title="Articles" route="/articles" />
        <NavTabLink title="Products" route="/products" />
        <NavTabLink title="Contact Us" route="/contact" />
      </Box>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
          color: "#fff",
          fontSize: "10px",
        }}
      >
        <Box
          sx={{ height: "100%", display: "flex", alignItems: "center", mr: 3 }}
        >
          <IconButton sx={{ color: "#fff" }}>
            <FacebookOutlinedIcon sx={{ fontSize: "17px" }} />
          </IconButton>

          <IconButton sx={{ color: "#fff" }}>
            <InstagramIcon sx={{ fontSize: "17px" }} />
          </IconButton>

          <IconButton sx={{ color: "#fff" }}>
            <TwitterIcon sx={{ fontSize: "17px" }} />
          </IconButton>
        </Box>

        <IconButton sx={{ color: "#fff" }}>
          <LocalPhoneIcon sx={{ fontSize: "17px" }} />
        </IconButton>

        <Typography variant="div" sx={{ fontSize: "15px" }}>
          +123 456 7890
        </Typography>
      </Box>
    </Box>
  );
};

const SmallScreenNavBar = () => {
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false);

  const toggleDrawer = (_, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawerMenu(open);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "120px",
          fontWeight: 700,
          fontSize: "25px",
        }}
      >
        <Link href="/">
          <a
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="./logo.png"
              style={{
                height: "100%",
                objectFit: "contain",
              }}
              alt="logo"
            />
          </a>
        </Link>
      </Box>

      <Box
        sx={{
          height: "100%",
          flex: 1,
          p: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <IconButton
          onClick={toggleDrawer("right", true)}
          sx={{ color: "#fff" }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <div>
        <SwipeableDrawer
          anchor={"right"}
          open={openDrawerMenu}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          <Box
            sx={{
              height: "100%",
              width: "300px",
              background: "#f89633",
              p: 2,
            }}
          >
            <List sx={{ width: "100%" }} id="small-screen-nav-routes">
              {[
                {
                  title: "Home",
                  route: "/",
                },
                {
                  title: "About Us",
                  route: "/#about-us",
                },
                {
                  title: "Articles",
                  route: "/articles",
                },
                {
                  title: "Products",
                  route: "/products",
                },

                {
                  title: "Contact Us",
                  route: "/contact",
                },
              ].map((link, index) => (
                <>
                  <Link href={link.route}>
                    <a
                      sx={{ color: "#fff" }}
                      onClick={toggleDrawer("right", false)}
                    >
                      <ListItem button key={link}>
                        <ListItemText primary={link.title} />
                        <ListItemIcon sx={{ minWidth: "unset" }}>
                          <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                        </ListItemIcon>
                      </ListItem>
                    </a>
                  </Link>
                </>
              ))}
            </List>
          </Box>
        </SwipeableDrawer>
      </div>
    </Box>
  );
};

export default Nav;
