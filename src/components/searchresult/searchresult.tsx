import React from "react";
import { connect } from "react-redux";
import logo from "../../assest/demoimage.jpg";
import "./searchresult.css";
interface IProps {
  movieid: Function;
}
interface IState {
  name: string;
  items: any;
  isavailable: boolean;
  randomid: string;
}
class SearchResult extends React.Component<IProps, IState> {
  arr: any = [];
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "",
      items: {},
      randomid: "",
      isavailable: false
    };
  }
  componentWillReceiveProps(nextprops: any) {
    console.log(nextprops.name);
    if (nextprops.name.name) {
      this.setState(
        {
          name: nextprops.name.name
        },
        () => {
          this.servercall();
        }
      );
    }
    if (nextprops.name.randomid) {
      this.setState(
        {
          randomid: nextprops.name.randomid
        },
        () => {
          this.randomresult();
        }
      );
    }
  }

  randomresult() {
    let url =
      "http://www.omdbapi.com/?apikey=e7b14509&i=tt" + this.state.randomid;
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          console.log("result", result);
          if (result.Response === "False") {
            this.movienotavailable();
          } else {
            this.setState(
              {
                items: [result]
              },
              () => {
                console.log(this.state);
                this.mappingarray();
              }
            );
          }
        },
        error => {
          console.log(error);
        }
      );
  }
  servercall(): void {
    console.log(this.state.name);
    let url = "http://www.omdbapi.com/?apikey=e7b14509&s=" + this.state.name;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          console.log("result", result);
          if (result.Response === "False") {
            this.movienotavailable();
          } else {
            this.setState(
              {
                items: result.Search
              },
              () => {
                console.log(this.state);
                this.mappingarray();
              }
            );
          }
        },
        error => {
          console.log(error);
        }
      );
  }
  handleclick = (event: any) => {
    event.preventDefault();
    console.log(event.target.id);
    this.props.movieid(event.target.id);
  };
  mappingarray() {
    this.arr = (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th> Title</th>
            <th> Year</th>
            <th> Type</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map((element: any, index: any) => {
            return (
              <tr
                className="onhover"
                key={index}
                id={element.imdbID}
                onClick={this.handleclick}
              >
                <td id={element.imdbID}>{element.Title}</td>
                <td id={element.imdbID}>{element.Year}</td>
                <td id={element.imdbID}>{element.Type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
    // this.arr = this.state.items.map((element: any) => {
    //   /////////////////////

    //   if (element.Poster === "N/A" || undefined) {
    //     return (
    //       <div
    //         className="card moviecard"
    //         key={element.imdbID}
    //         id={element.imdbID}
    //         onClick={this.handleclick}
    //       >
    //         <img className="imagesize" id={element.imdbID} src={logo} />
    //         <div>Title:{element.Title}</div>
    //         <div>Type:{element.Type}</div>
    //         <div>Year:{element.Year}</div>
    //       </div>
    //     );
    //   } else {
    //     return (
    //       <div
    //         className="card moviecard"
    //         key={element.imdbID}
    //         id={element.imdbID}
    //         onClick={this.handleclick}
    //       >
    //         <img
    //           className="imagesize"
    //           id={element.imdbID}
    //           src={element.Poster}
    //         />
    //         <div>Title:{element.Title}</div>
    //         <div>Type:{element.Type}</div>
    //         <div>Year:{element.Year}</div>
    //       </div>
    //     );
    //   }
    // });
    this.setState({
      isavailable: true
    });
    console.log(this.arr);
  }
  movienotavailable() {
    this.arr = <div>Movie Not Available</div>;
    this.setState({
      isavailable: true
    });
  }
  render() {
    if (this.state.isavailable) {
      return <div>{this.arr}</div>;
    } else {
      return <div>Not Available</div>;
    }
  }
}
const setpr = (state: any) => {
  return {
    name: state
  };
};
const setfuntopro = (dispatch: any) => {
  return {
    movieid: (movieid: string) => {
      dispatch({
        type: "addmovieid",
        movieid: movieid
      });
    }
  };
};
export default connect(
  setpr,
  setfuntopro
)(SearchResult);
