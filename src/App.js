import React, { Component } from 'react';
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import SideBar from '../src/components/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className='Main'>
        <div className="NavBar">
          < NavBar />
        </div>
        <div className="SideBar">
          < SideBar />
        </div>
      </div>

      // <div className="App">
      //   <header className="App-header">stempedia.org</header>
      // </div>
    );
  }
}

export default App;
