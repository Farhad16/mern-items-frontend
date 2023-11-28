import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const pages = [
  { name: "Home", link: "/" },
  { name: "Items", link: "/items" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  const handleAvatarClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "avatar-popover" : undefined;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav className="bg-gray-900 py-4 sm:px-16 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Box sx={{ flexGrow: 1 }} className="md:hidden flex">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon style={{ fill: "white", marginRight: "4px" }} />
            <Link
              to="/"
              className="text-white text-lg font-semibold flex items-center gap-2"
            >
              <ShoppingCartIcon />
              <span>Shopping</span>
            </Link>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            className="md:hidden flex items-center"
          >
            {pages.map((page) => (
              <Link to={page.link} key={page.name}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>
        <div className="space-x-4 items-center hidden md:flex">
          <Link
            to="/"
            className="text-white text-lg font-semibold flex items-center gap-2"
          >
            <ShoppingCartIcon /> <span>Shopping</span>
          </Link>
          <div className="space-x-4">
            {pages.map((page) => (
              <NavLink
                to={page.link}
                key={page.name}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-yellow-300" : "text-white"
                  } hover:text-yellow-300 font-semibold`
                }
              >
                {page.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <>
            {user ? (
              <p
                className="ml-4 flex gap-2 items-center cursor-pointer font-semibold text-white"
                onClick={() => {}}
              >
                Logout
              </p>
            ) : (
              <Link
                className="ml-4 flex gap-2 items-center cursor-pointer font-semibold text-white"
                to="/login"
              >
                Login
              </Link>
            )}
          </>
          {user && (
            <Avatar
              alt="User Avatar"
              src={user?.photoURL || ""}
              onClick={handleAvatarClick}
              className="cursor-pointer"
            />
          )}

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleAvatarClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div className="flex flex-col p-4 gap-2 font-medium">
              {user && (
                <div className="flex flex-col text-sm ml-1">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs opacity-50">{user?.email}</p>
                </div>
              )}
              <p className="text-sm flex gap-2 items-center cursor-pointer">
                <AccountCircleIcon />
                Profile
              </p>
              <p className="text-sm flex gap-2 items-center cursor-pointer">
                <SettingsIcon /> Settings
              </p>
              {user ? (
                <p
                  className="text-sm flex gap-2 items-center cursor-pointer"
                  onClick={() => {}}
                >
                  <LogoutIcon />
                  Logout
                </p>
              ) : (
                <Link
                  className="text-sm flex gap-2 items-center cursor-pointer"
                  to="/login"
                >
                  <LoginIcon /> Login
                </Link>
              )}
            </div>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
