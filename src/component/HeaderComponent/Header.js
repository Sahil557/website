import React from 'react';
import { Badge, Tooltip } from '@material-ui/core'
import { Brightness4, Brightness7 } from '@material-ui/icons'
import { useState } from 'react'
import { WrappingToolbar1, NotifyMenuOpen, MenuOpen, WrappingToolbar, AllIconButton, HamBurger, NotificationBellIcon, LineBreaker, ProfileIcon, HeaderText } from './HeaderStyle.css.ts'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { MenuItem, ListItemAvatar, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    button: {
        width: 60,
        marginTop: 10,
        borderRadius: 50,
        height: 64,
        position: 'fixed',
        zIndex: 1,
        right: 25,
        marginTop: 110
    }
});

export const Header = ({ modeOn }) => {
    const [openMode, isOpenMode] = useState(true);
    
    const [profilePop, setProfilePop] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [notificationPop, setNotificationPop] = useState(true);
    const [notify, setNotify] = useState(null);
    const opened =Boolean(notify);

    const handleChange = (event) => {
        setProfilePop(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const notifyHandleChange = (event) => {
        setNotificationPop(event.target.checked);
    }

    const notifyHandleMenu = (event) => {
        setNotify(event.currentTarget);
    };

    const notifyHandleClose = () => {
        setNotify(null);
    };

    const handleIconMode = () => {
        isOpenMode(false)
    }

    const classes = useStyles();
    const [state, setState] = useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['My Account'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon >{index % 2 === 0 && <ProfileIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Saved', 'Trash'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <SaveAltIcon /> : <DeleteIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Settings'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 && <SettingsIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <>
            <WrappingToolbar >


                <div>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <AllIconButton onClick={toggleDrawer(anchor, true)}>
                                <HamBurger />
                            </AllIconButton>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>

                <HeaderText>WELCOME TO OUR BLOGGING PAGE</HeaderText>

                {
                    (openMode) ?
                        (

                            <AllIconButton onClick={modeOn}>
                                <Tooltip title='Light/Dark Theme'>
                                    {/* night */}
                                    <Brightness4 onClick={handleIconMode}></Brightness4>
                                </Tooltip>
                            </AllIconButton>

                        ) :
                        (
                            <AllIconButton onClick={modeOn}>
                                <Tooltip title='Light/Dark Theme'>
                                    <Brightness7 onClick={() => isOpenMode(!openMode)}></Brightness7>
                                </Tooltip>
                            </AllIconButton>
                        )
                }

                {/* <AllIconButton>
                    <Tooltip title='Notifications panel'>
                            <Badge badgeContent={4} color="secondary" overlap='rectangular'>
                                <NotificationBellIcon />
                            </Badge>
                    </Tooltip>

                </AllIconButton> */}
                {notificationPop && (
                    <div>
                        <AllIconButton
                            onClick={notifyHandleMenu}
                            color="inherit"
                        >
                            <Tooltip title='Notifications panel'>
                                <Badge badgeContent={4} color="secondary" overlap='rectangular'>
                                    <NotificationBellIcon />
                                </Badge>
                            </Tooltip>
                        </AllIconButton>
                        <NotifyMenuOpen
                            id="menu-appbar"
                            notify={notify}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={opened}
                            onClose={notifyHandleClose}
                        >
                            <List>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Summer BBQ"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    to Scott, Alex, Jennifer
                                                </Typography>
                                                {" — Wish I could come, but I'm out of town this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Oui Oui"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Sandra Adams
                                                </Typography>
                                                {' — Do you have Paris recommendations? Have you ever…'}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </NotifyMenuOpen>
                    </div>
                )}

                {profilePop && (
                    <div>
                        <AllIconButton
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Tooltip title='Account'>
                                <ProfileIcon />
                            </Tooltip>
                        </AllIconButton>
                        <MenuOpen
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>My Account</MenuItem>
                            <LineBreaker />
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </MenuOpen>
                    </div>
                )}

            </WrappingToolbar>

            <LineBreaker />

            <WrappingToolbar1>Express your Empotions Through Words</WrappingToolbar1>


            <Button href='/'
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<ArrowUpwardIcon style={{ marginLeft: "10px", fontSize: '35px', marginBottom: '2px' }} />}
            />
            <h1> sahil</h1>
        </>
    )

}