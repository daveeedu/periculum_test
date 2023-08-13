import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import links from "../../utils/linkTree";
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import { ListItem, ListItemIcon } from '@mui/material';
import SidebarItems from "./SidebarItems";
import { ILogout, ISetting } from "../../utils/icons.utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const drawerWidth = 75;

export default function HomeSidebar(props) {
  const { window, children } = props;
  const [phoneNumberOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!phoneNumberOpen);
  };

  const drawer = (
    <div className="">
      <Toolbar>
      </Toolbar>
      <div className="md:hidden block ml-7">
      <IconButton
        color="#A0BDFF"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <GrClose />
      </IconButton>
      </div>
      <List className="">
        {links.map((link, index) => {
          return <SidebarItems {...{ link }} key={index} />
        })}
      </List>
      <ListItem className="absolute top-[100%]">
        <Box >
          <ListItemIcon>
            <img src={ILogout} alt="logout" className=" w-[36px]" />
          </ListItemIcon>
        </Box>
      </ListItem>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "#2F74DD",
          color: "#000",
          boxShadow: "none",
          width: "100%",
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
        <div className="md:hidden block text-white">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mt: 1, mr: 1 }}
      >
        <GiHamburgerMenu />
      </IconButton>
      </div>
          <Box className=" m-auto  w-full">
            <Box className="flex justify-between">
              <div className="pt-2">
                <h2 className="text-[20px] font-[700] text-[#fff]">CREDIT CHART</h2>
              </div>
              <div
                className="flex items-center text-white cursor-pointer md:py-2 md:px-4 p-1 "
              >
                <img src={ISetting} alt="brand" className="w-[90%] h-[90%] " />
              </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        fontFamily={'SofiaPro'}
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          "& .MuiDrawer-paper": {
            width: { sm: drawerWidth },
            boxSizing: 'border-box',
            backgroundColor: '#FFF;',
            borderRight: '0px',
            zIndex: 0,
          }
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={phoneNumberOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
          className="relative"
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        className=" xl:pl-[8%] lg:pl-[11%] md:pl-[15%]"
      >
        {children}
      </Box>
    </Box>
  );
}
