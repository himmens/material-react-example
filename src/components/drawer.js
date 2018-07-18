import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
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
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.primary}} inset primary="Home"/>
          </MenuItem>
          <MenuItem onClick={onDrawerClose}>
            My account
          </MenuItem>
        </div>
      </Drawer>
    </div>
  );
};

AppDrawer.propTypes = {
  classes: PropTypes.instanceOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppDrawer);