import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#5d9aff',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleMenu(event) {
    this.setState({anchorEl: event.currentTarget});
  }

  handleClose() {
    this.setState({anchorEl: null});
  }

  handleSignOut() {
    this.handleClose();
    const {onSignOut} = this.props;
    onSignOut();
  }

  render() {
    const {classes, onIconClick} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" onClick={onIconClick}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              News
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>
                  Profile
                </MenuItem>
                <MenuItem onClick={this.handleSignOut}>
                  Sign Out
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  onIconClick: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppHeader);