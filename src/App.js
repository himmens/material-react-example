import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" classes="">
          Hello World
        </Button>
      </div>
    );
  }
}