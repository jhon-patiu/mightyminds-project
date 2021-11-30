import React, { useState } from "react";
import {
    Link,
    AppBar,
    Toolbar,
    Typography,
    Divider,
    Avatar,
    Box,
    Hidden,
    IconButton,
    SwipeableDrawer,
    ListItem,
    List,
    Menu,
    MenuItem,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { makeStyles } from "@mui/styles";

// Links array to map
const navLinks = [
    { name: "Home", href: "/" },
    { name: "Classes", href: "/classes" },
    { name: "Planner ", href: "/planner" },
    { name: "School Data", href: "/school-data" },
    { name: "Library", href: "/library" },
];

// Style MUI
const useStyles = makeStyles((theme) => ({
    link: {
        alignItems: "center",
        display: "flex",
        color: "#fff",
        padding: "0 1em",
        "&:hover": {
            transform: "scale(1.1)",
            color: "lightblue",
            borderBottom: "2px solid lightblue",
        },
    },
    navbar: {
        width: "100%",
        background: "rgba(15,37,81,255)",
    },
    brand: {
        display: "flex",
        alignItems: "center",
    },
    list: {
        width: 180,
    },
    drawerLink: {
        "&:hover": {
            borderBottom: "1px solid blue",
            width: "100%",
        },
    },
    helpLink: {
        alignItems: "center",
        display: "flex",
    },
}));

const Navbar = () => {
    const styles = useStyles();

    // Side Drawer State
    const [openDrawer, setOpenDrawer] = useState(false);

    // Account Menu Pop
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar className={styles.navbar} position="sticky">
            <Toolbar>
                {/* RIGHT NAV */}
                <Box sx={{ display: "flex", flex: 1 }}>
                    <Typography
                        className={styles.brand}
                        variant="h6"
                        px={{ xs: 0, sm: 3 }}>
                        MIGHTY MINDS
                    </Typography>
                    <Divider orientation="vertical" variant="middle" light />
                    <Hidden lgDown>
                        {navLinks.map((item, index) => (
                            <Link
                                key={index}
                                color="lightgray"
                                className={styles.link}
                                variant="body1"
                                underline="none"
                                exact="true"
                                href={item.href}>
                                {item.name}
                            </Link>
                        ))}
                    </Hidden>
                    {/* Hamburger Menu */}
                    <Hidden lgUp>
                        <IconButton onClick={() => setOpenDrawer(true)}>
                            <MenuIcon color="info" fontSize="large" />
                        </IconButton>
                    </Hidden>
                </Box>
                {/* Side Drawer from left side */}
                <SwipeableDrawer
                    open={openDrawer}
                    onOpen={() => setOpenDrawer(true)}
                    onClose={() => setOpenDrawer(false)}>
                    <IconButton onClick={() => setOpenDrawer(false)}>
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>
                    <Divider />
                    <List className={styles.list}>
                        {navLinks.map((item, index) => (
                            <ListItem className={styles.list}>
                                <Link
                                    className={styles.drawerLink}
                                    key={index}
                                    color="primary"
                                    variant="h6"
                                    underline="none"
                                    exact="true"
                                    href={item.href}>
                                    {item.name}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>

                {/* LEFT NAV*/}
                <Box sx={{ display: "flex" }}>
                    <Hidden smDown>
                        <Link
                            className={styles.helpLink}
                            color="gray"
                            variant="body1"
                            underline="hover"
                            href="/help-center">
                            <HelpIcon />
                            Help Center
                        </Link>
                    </Hidden>
                    <Divider orientation="vertical" variant="middle" light />
                    <Box px={3} sx={{ display: "flex" }}>
                        <Hidden smDown>
                            <Box component="span" mr={1}>
                                <Typography variant="body2">
                                    Jasmine Finn
                                </Typography>
                                <Typography variant="body2">
                                    Teacher Account
                                </Typography>
                            </Box>
                        </Hidden>
                        <Hidden smUp>
                            <MoreVertIcon
                                fontSize="large"
                                color="info"
                                onClick={handleClickMenu}
                            />
                        </Hidden>
                        <Menu
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleCloseMenu}>
                            <MenuItem onClose={handleCloseMenu}>
                                Account
                            </MenuItem>
                            <MenuItem onClose={handleCloseMenu}>
                                Settings
                            </MenuItem>
                            <MenuItem onClose={handleCloseMenu}>
                                <HelpIcon fontSize="small" />
                                Help Center
                            </MenuItem>
                        </Menu>
                        <Avatar
                            sx={{ backgroundColor: "purple" }}
                            variant="rounded"
                            alt="JF">
                            JF
                        </Avatar>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
