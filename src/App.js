import React, { useState, Fragment } from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import axios from "axios";
import About from "./Components/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [users,setusers]=useState([]);

  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   this.setState({loading:true})
  //  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //  this.setState({users:res.data,loading:false})
  // }

  const searchuser = async (text) => {
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setusers(res.data.items);
  };

  
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search searchuser={searchuser} />
                    <Users users={users} />
                  </Fragment>
                )}
              />
        
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  
}

export default App;
