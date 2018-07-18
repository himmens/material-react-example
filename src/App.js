import React from 'react';
import AppHeader from './components/header';
import AppDrawer from './components/drawer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    const {isDrawerOpen} = this.state;
    this.setState({isDrawerOpen: !isDrawerOpen});
  }

  render() {
    const {isDrawerOpen} = this.state;

    return (
      <div>
        <AppHeader onIconClick={this.toggleDrawer}/>
        <AppDrawer open={isDrawerOpen} onDrawerClose={this.toggleDrawer}/>
      </div>
    );
  }
}