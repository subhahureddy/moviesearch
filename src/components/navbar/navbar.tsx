import React from "react";
import { connect } from "react-redux";
import dispatch from "redux";
import "./navbar.css";
interface IProps {
  setmovie: Function;
  randmovie: Function;
}
interface IState {
  name: string;
}
class Navbar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: any) {
    event.preventDefault();
    this.props.setmovie(this.state.name);
  }
  handleChange(event: any) {
    console.log(event.target.value);
    let value = event.target.value;
    this.setState({ name: value });
  }
  handlerandom = () => {
    var movie = this.pad(Math.floor(Math.random() * 2155529 + 1), 7);
    this.props.randmovie(movie);
  };
  pad(number: any, length: any) {
    var str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <div className="header">
          <div className="row">
            <div className="col-10 searchbar">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="inputform"
                  type="text"
                  placeholder="Search Movies"
                  value={this.state.name}
                  onChange={this.handleChange}
                />

                <input type="submit" className="submitform" value="Submit" />
              </form>
            </div>
            <div className="col-2">
              <button className="searchbar" onClick={this.handlerandom}>
                Random Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const setfuntoprops = (dispatch: any) => {
  return {
    setmovie: (name: string) => {
      dispatch({ type: "set", name: name });
    },
    randmovie: (randid: string) => {
      dispatch({ type: "randomid", randid: randid });
    }
  };
};

export default connect(
  null,
  setfuntoprops
)(Navbar);
