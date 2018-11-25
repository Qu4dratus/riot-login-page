// React.
import * as React from 'react';

// Custom Components.
import Welcome from './components/Welcome';

// Components.
export default class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Welcome />
      </div>
    );
  }
};