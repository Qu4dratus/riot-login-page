import * as React from 'react';
import Welcome from './components/Welcome';

export default class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Welcome />
      </div>
    );
  }
};