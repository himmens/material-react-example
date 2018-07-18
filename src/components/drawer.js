import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const AppDrawer = (props) => {
  const {open, onDrawerClose} = props;

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
            Profile
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
  open: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppDrawer);