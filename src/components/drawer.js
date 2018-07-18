import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class AppDrawer extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
                <Drawer open={this.props.open} onClose={this.props.onDrawerClose}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.onDrawerClose}
                        onKeyDown={this.props.onDrawerClose}
                    >
                        <MenuItem onClick={this.props.onDrawerClose}>Profile</MenuItem>
                        <MenuItem onClick={this.props.onDrawerClose}>My account</MenuItem>
                    </div>
                </Drawer>
            </div>
        );
    }
}

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppDrawer);