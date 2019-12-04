import React, { Component } from 'react';
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import SideBar from '../src/components/SideBar/SideBar';
import SearchResults from '../src/components/SearchResults/SearchResults';


import { Route, Switch,} from 'react-router-dom';
import { isPseudoElement } from 'postcss-selector-parser';

// import { Switch } from 'react-native-paper';

const user = {
    name: 'testName',
    email: 'testEmail',
    description: 'testDescription',
    searchHistory: 
      [{id: 1, name: '1'},{id: 2, name:'2'},{id: 3, name:'3'}],
    favorites: 
      [{id: 1, name: '1'},{id: 2, name:'2'},{id: 3, name:'3'}]
  }

const posts = [
  {
    name: 'post0',
    id: 0,
    description: 'aslkeja asd ifjaodsifaf naoweifaoilkshdh oaishgohasdgn oahsego;hagrha;oisfhg aosihgiauhrgihsg',
    searchHistory: 
      [{id: 1, name: '1'},{id: 2, name:'2'},{id: 3, name:'3'}],
    favorites: 
      [{id: 1, name: '1'},{id: 2, name:'2'},{id: 3, name:'3'}]
  },
  {
    name: 'post1',
    id: 1,
    description: 'post1desc',
    user: 'user2',
  }
]
      

class App extends Component {
  state = {
    user: user,
    searchResults: [],
    resultsLoaded: false,
    query: '',

  }
  render() {
    
    return (
      <div>
        <div className='App'>
          <div className="NavBar">
            < NavBar 
              user={user}
            />
          </div>

          <div>
            < SideBar 
              user={user}
              posts={posts}
            />
          </div>

          < Switch >
            <Route exact path='/search' render={() =>
              < SearchResults
              />
            }/>

          </Switch>
          {/* <div className='SideBar'>
            < SideBar />
          </div> */}
        </div>
      </div>

      // <div className="App">
      //   <header className="App-header">stempedia.org</header>
      // </div>
    );
  }
}

export default App;
