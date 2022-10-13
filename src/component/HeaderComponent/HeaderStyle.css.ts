import { Divider, IconButton, styled, Toolbar, Typography } from "@material-ui/core"
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListIcon from '@material-ui/icons/List';
import { AccountCircle } from "@material-ui/icons";
import { Menu } from '@material-ui/core';

export const WrappingToolbar = styled(Toolbar)({
   
});

export const AllIconButton = styled(IconButton)({
    color : 'inherit'
});

export const HamBurger = styled(ListIcon)({
    
});

export const HeaderText = styled(Typography)({
    fontFamily : 'Sans-serif',
    flexGrow : 1
});

export const NotificationBellIcon = styled(NotificationsIcon)({
    
});

export const ProfileIcon = styled(AccountCircle)({
    
});

export const LineBreaker = styled(Divider)({
    
});

export const WrappingToolbar1 = styled(Toolbar)({
   
});


export const MenuOpen = styled(Menu)({
    marginTop: '45px',
});

export const NotifyMenuOpen = styled(Menu)({
    '&.element.style':{
        top: '15px',
    }
   
});






















/* export const PreviewLayoutWrapper = styled('div')({
    height: '35%',
    position: 'fixed',
    zIndex: 1003,
    bottom: '2%',
    left: '5%',
    '& .MuiSpeedDial-actions': {
        margin: 0,
        padding: 0
    },
    '& .MuiSpeedDialAction-staticTooltip': {
        marginBottom: 8,
        cursor: 'pointer'
    }
}); */