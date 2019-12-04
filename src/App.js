import React, { Component } from 'react';
import './App.css';

import NavBar from '../src/components/NavBar/NavBar';
import SideBar from '../src/components/SideBar/SideBar';
import SearchResults from '../src/components/SearchResults/SearchResults';
import Home from '../src/components/Home/Home';
import UserForm from '../src/components/User/UserForm/UserForm';
import PostForm from '../src/components/PostForm/PostForm';

import { Route, Switch,} from 'react-router-dom';
// import { isPseudoElement } from 'postcss-selector-parser';

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
    date: '',
    description: 'aslkeja asd ifjaodsifaf naoweifaoilkshdh oaishgohasdgn oahsego;hagrha;oisfhg aosihgiauhrgihsg',
    user_id: '0',
    tags: [],
    upVotes: 3,
    downVotes: -1,
    rating: 2,
  },
  {
    name: 'post1',
    id: 1,
    date: '',
    description: 'post1desc',
    user_id: '1',
    tags: [],
    upVotes: 1,
    downVotes: -4,
    rating: -3,
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
          <div className='Main'>
            <div>
              < SideBar 
                user={user}
                posts={posts}
              />
            </div>

            < Switch >
              <Route exact path='/' render={() =>
                < Home
                />
              }/>

              <Route exact path='/newuser' render={() =>
                < UserForm
                />
              }/>

              <Route exact path='/newpost' render={() =>
                < PostForm
                />
              }/>

              <Route exact path='/searchresults' render={() =>
                < SearchResults
                />
              }/>
            </Switch>
          </div>
        </div>
      </div>

      // <div className="App">
      //   <header className="App-header">stempedia.org</header>
      // </div>
    );
  }
}

export default App;
