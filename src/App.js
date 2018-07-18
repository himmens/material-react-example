import React, {Component} from 'react';
import AppHeader from './components/header';
import AppDrawer from './components/drawer';

export default class App extends Component {
    state = {
        isDrawerOpen: false,
    };

    toggleDrawer = () => {
        this.setState({isDrawerOpen: !this.state.isDrawerOpen});
    };

    render() {
        return (
            <div>
                <AppHeader onIconClick={this.toggleDrawer}/>
                <AppDrawer open={this.state.isDrawerOpen} onDrawerClose={this.toggleDrawer}/>
            </div>
        );
    }
}