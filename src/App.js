import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Pages from './constants/Pages';
import Search from "./components/Search";
import MyList from "./components/MyList";
import Movie from "./components/Movie";

class App extends Component {
  
  
  getPage(page){
    switch (page) {
        case Pages.SEARCH :
          return <Search/>;
        case Pages.MY_LIST :
          return <MyList/>;
        case Pages.MOVIE :
          return <Movie/>
    }
  }
  
  render() {
    return (
      <div>
        <NavBar/>
        
          {this.getPage(Pages.MOVIE)}
      </div>
    );
  }
}

export default App;
