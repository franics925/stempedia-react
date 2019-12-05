import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../src/components/NavBar/NavBar';
import SideBar from '../src/components/SideBar/SideBar';
import SearchResults from '../src/components/SearchResults/SearchResults';
import Home from '../src/components/Home/Home';
import UserForm from '../src/components/User/UserForm/UserForm';
import PostForm from '../src/components/PostForm/PostForm';
import Post from '../src/components/Post/Post';

import { Route, Switch,} from 'react-router-dom';
// import { isPseudoElement } from 'postcss-selector-parser';

// import { Switch } from 'react-native-paper';

const user = [{
    user_id: 0,
    name: 'Greg',
    email: 'greg@stempedia.org',
    description: 'User Number One!!',
  },
  {
    user_id: 1,
    name: 'Mike',
    email: 'mike@stempedia.org',
    description: 'User Number Two!!',
  }]

const posts = [
  {
    title: 'Pythagoreans Theorem',
    id: 0,
    date: 'Dec 4, 2019',
    description: 'A hyberbrief explanation of The Pythagorean Theorem',
    body: "To use pythagoreans theorem, one must understand that it can only be used for right triangles, triangles containing a 90 degree angle. The formula is a^2+b^2=c^2 where c is the hypotenuse  (the side opposite the 90 degree angle).",
    user_id: 0,
    userName: 'Greg',
    tags: ['math', 'geometry', 'pythagorean', 'triangles'],
    views: 13,
  },
  {
    title: 'How to create a form in HTML',
    id: 1,
    date: 'Dec 3, 2019',
    description: 'Using form Tags',
    body: "use <form></form> around the body of your form. other tags can include <input>/<input>, <label></label> ...",
    user_id: 1,
    userName: 'Mike',
    tags: ['HTML'],
    views: 6,
  },
]
      

class App extends Component {
  state = {
    user: user,
    posts: posts,
    query: '',
    searchLoading: false,
    searchResults: posts,
    resultsLoaded: false,
    searchResult: {},
  }

  handleOnChange = (event) => {
    this.setState({
        query: (event.target.value)
    })
};

  handleonclick = (event) => {
    // this.setState({
    //   searchLoading: true,
    // })
    console.log('button clicked')
  };

  

//   handleSearch = async (event) => {
//     this.setState({
//         searchLoading: true,
//         searchResults: [],
//         resultsLoaded: false,
//     })
//     let searchResults = await plantService.search(this.state.query).then(res => JSON.parse(res));
    
//     this.setState({ 
//         searchResults: searchResults,
//         searchLoading: false,
//         resultsLoaded: true,
//         priorQuery: this.state.query
//     })
// };

  
  render() {
    return (
      <div>
        <div className='App'>
          <div className="NavBar">
            < NavBar 
              {...this.state}
              handleOnClick={this.handleOnClick}
              handleOnChange={this.handleOnChange}
              posts={posts}
            />
          </div>
          <div className='Main'>
            <div>
              < SideBar 
                {...this.state}
              />
            </div>
              < Switch >
                <Route exact path='/' render={() =>
                  < SearchResults
                  {...this.state}
                  />
                }/>

                <Route exact path='/post' render={() =>
                  < Post
                    {...this.state}
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

                <Route exact path='/search' render={() =>
                  < SearchResults
                    {...this.state}
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
