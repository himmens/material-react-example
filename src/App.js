import React from 'react';
import AppHeader from './components/header';
import AppDrawer from './components/drawer';
import AppDialog from './components/dialog';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      isDialogOpen: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  toggleDrawer() {
    const {isDrawerOpen, isDialogOpen} = this.state;
    this.setState({isDrawerOpen: !isDrawerOpen, isDialogOpen});
  }

  toggleDialog() {
    const {isDrawerOpen, isDialogOpen} = this.state;
    this.setState({isDrawerOpen, isDialogOpen: !isDialogOpen});
  }

  handleSignOut() {
    const {isDrawerOpen, isDialogOpen} = this.state;
    this.setState({isDrawerOpen, isDialogOpen: !isDialogOpen});
  }

  render() {
    const {isDrawerOpen, isDialogOpen} = this.state;

    return (
      <div>
        <AppHeader onIconClick={this.toggleDrawer} onSignOut={this.handleSignOut}/>
        <AppDrawer open={isDrawerOpen} onDrawerClose={this.toggleDrawer}/>
        <AppDialog open={isDialogOpen} onClose={this.toggleDialog} onOk={this.toggleDialog}/>
      </div>
    );
  }
}