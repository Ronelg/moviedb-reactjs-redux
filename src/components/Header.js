import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar,Toolbar,IconButton,Typography,Button} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: grey[50],
    textDecoration: "none",
  },
  toolbar: {
    padding: theme.spacing(0, 20),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    flexGrow: 1,
    flexShrink: 0,
  },
  menuTitle: {
    padding: theme.spacing(0, 2),
    color: grey[50],
    fontSize: 16,
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

const menu = [
  { title: "Movies", path: "/movies" },
  { title: "TV Shows", path: "/tv-shows" },
  { title: "People", path: "/people" },
  { title: "More", path: "/more" },
];

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <Link className={classes.title} to={"/"}>
              TMDB
            </Link>
          </Typography>

          <div className={classes.menuContainer}>
            {menu.map((menuItem) => (
              <Link
                key={menuItem.title}
                to={`${menuItem.path}`}
                className={classes.menuTitle}
              >
                {menuItem.title}
              </Link>
            ))}
          </div>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
