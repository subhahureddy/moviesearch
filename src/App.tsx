import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./components/navbar/navbar";
import Searchresult from "./components/searchresult/searchresult";
import Particularmovie from "./components/particularmovie/particularmovie";
class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  componentWillReceiveProps(nextprops: any) {
    console.log(nextprops);
  }
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Navbar />
            <div className="row">
              <div className="col-4 searchresult">
                <Searchresult />
              </div>
              <div className="col-8 searchresult">
                <Particularmovie />
                {/* <Route path="/search" component={Particularmovie} /> */}
              </div>
            </div>
          </div>
        </Router>
      </>
    );
  }
}
const setprops = (state: any) => {
  return {
    name: state
  };
};

const setfuntoprops = (dispatch: any) => {
  return {
    setmovie: () => {
      dispatch({ type: "get" });
    }
  };
};
export default connect(
  setprops,
  setfuntoprops
)(App);
