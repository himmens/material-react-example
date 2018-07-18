import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountBox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    color: '#5d9aff',
    '&:hover': {
      color: '#dd2560',
    },
  },
};

const AppDrawer = (props) => {
  const {classes, open, onDrawerClose} = props;

  return (
    <div>
      <Drawer open={open} onClose={onDrawerClose}>
        <div
          tabIndex={0}
          role="button"
          onClick={onDrawerClose}
          onKeyDown={onDrawerClose}
        >
          <MenuItem onClick={onDrawerClose}>
            <ListItemIcon className={classes.icon}>
              <HomeIcon className="icon"/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.primary}} inset primary="Home"/>
          </MenuItem>
          <MenuItem onClick={onDrawerClose}>
            <ListItemIcon className={classes.icon}>
              <AccountIcon className="icon"/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.primary}} inset primary="My account"/>
          </MenuItem>
        </div>
      </Drawer>
    </div>
  );
};

AppDrawer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  open: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppDrawer);