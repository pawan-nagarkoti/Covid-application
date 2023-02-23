import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Menu,
  Home,
  PermContactCalendar,
  Language,
  Stars,
} from '@material-ui/icons';
import { useState } from 'react';

// css implementation
const PREFIX = 'Main';
const classes = {
  wraper: `${PREFIX}-wraper`,
  rightSide: `${PREFIX}-rightSide`,
  menuIcons: `${PREFIX}-menuIcons`,
};
const ToolbarCustom = styled(Toolbar)(({ theme }) => ({
  [`&.${classes.wraper}`]: {
    diplay: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  [`& .${classes.rightSide}`]: {
    display: 'flex',
    '&>*': {
      margin: '0 10px',
      fontSize: 20,
      textDecoration: 'none',
      color: 'white',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  [`& .${classes.menuIcons}`]: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export const Main = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar>
        <ToolbarCustom className={classes.wraper}>
          {/* drawer */}
          <SwipeableDrawer open={open} onClick={() => setOpen(false)}>
            <Box>
              {/* list item */}
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      to="/"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      Home
                    </Link>
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <Language />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      to="/world"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      World Covid-19 Cases
                    </Link>
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <Stars />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      to="/india"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      India Covid-19 Cases
                    </Link>
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <PermContactCalendar />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      to="/contact"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      Contact
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </SwipeableDrawer>

          {/* hamburger */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
            className={classes.menuIcons}
          >
            <Menu />
          </IconButton>

          {/* left side  */}
          <Box>
            <Typography variant="h5">Covid-19 Tracker</Typography>
          </Box>

          {/* right side */}
          <Box className={classes.rightSide}>
            <Link to="/">Home</Link>
            <Link to="/world">World Covid-19 Cases</Link>
            <Link to="/india">India Covid-19 Cases</Link>
            <Link to="/contact">Contact</Link>
          </Box>
        </ToolbarCustom>
      </AppBar>
    </>
  );
};
