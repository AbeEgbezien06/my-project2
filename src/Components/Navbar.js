import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { BiBook } from "react-icons/bi";
import { Box,
  Drawer,
  List,
  ListItem,
  ListItemButton, 
  ListItemIcon,
  ListItemText  
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon  from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LibraryBooks from "@mui/icons-material/LibraryBooks";

const Navbar = () => {

   const[openMenu, setopenMenu] = useState (false);
   const menuoption = [
    {
      text:"Home",
      icon:<HomeIcon/>
    },
    {
      text:"About",
      icon:<InfoIcon/>
    },
    {
      text:"Books",
      icon:<LibraryBooks/>
    },
    {
      text:"Message",
      icon:<CommentRoundedIcon/>
    },
    {
      text:"Contact",
      icon:<PhoneRoundedIcon/>
    },
   ];
  
   return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" /> 
      </div> 
      <div className="navbar-links-container">
        <a href="/Home ">Home</a>
        <a href="/About">About</a>
        <a href="/View">View</a>
        <a href="/Contact">Contact</a>
        <a href="https://my-project-self-eta.vercel.app/">
          <  BiBook BsCart2 className="navbar-cart-icon" />
          </a>
        <button className="primary-button"><a href="https://abeegbezien06.github.io/project1/">Sign up</a></button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3  onClick={() => setopenMenu(true)}   />
      </div>
      <Drawer open={openMenu} onClose={() => setopenMenu(false)} 
      anchor="right">
      <Box 
      sx={{ width: 250}}
      role="presentation"
      onclick={() => setopenMenu(false)}
      onkeydown ={() => setopenMenu(false)}
      >
      <List>
        {menuoption.map((item) => (
          <ListItem key = {item.icon} disablepaddings>
            <ListItemButton>
              <ListItemIcon>
              {item.icon} 
              </ListItemIcon>
              <ListItemText primary={item.icon} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Box>
      </Drawer>
    </nav>
    );

};

export default Navbar;  