import React from "react";
import { connect } from "react-redux";
import "./particularmovie.css";
import MovieAwards from "../movieawards/movieawards";
import MovieReviews from "../moviereviews/moviereviews";
import MovieCast from "../moviecast/moviecast";
import MovieContent from "../moviecontent/moviecontent";
interface IProps {}
interface IState {
  movieid: string;
  items: any;
  available: boolean;
}
class Particularmovie extends React.Component<IProps, IState> {
  arr: any = [];
  constructor(props: IProps) {
    super(props);
    this.state = {
      movieid: "",
      items: {},
      available: false
    };
  }

  componentWillReceiveProps(nextprops: any) {
    console.log(nextprops.name.movieid);
    if (nextprops.name.name) {
      this.setState({ available: false });
    }
    if (nextprops.name.movieid) {
      this.setState({ movieid: nextprops.name.movieid, available: false }, () =>
        this.servercall()
      );
    }
  }
  servercall() {
    let url = "http://www.omdbapi.com/?apikey=e7b14509&i=" + this.state.movieid;
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState(
            {
              items: result
            },
            () => {
              console.log(this.state);
              this.maparray();
              console.log(this.arr);
            }
          );
        },
        error => {}
      );
  }
  maparray() {
    this.arr = (
      <>
        <MovieContent data={this.state.items} />
        <MovieCast data={this.state.items} />
        <MovieAwards data={this.state.items} />
        <MovieReviews data={this.state.items} />
      </>
    );
    console.log(this.arr);
    this.setState({
      available: true
    });
  }
  // maparray() {
  //   this.arr = (
  //     <div>
  //       <div className="card moviename">
  //         <p>
  //           <strong>{this.state.items.Title}</strong>
  //         </p>
  //         <div className="row">
  //           <div className="col-6">
  //             <p>
  //               {" "}
  //               <strong>Type:</strong>
  //               {this.state.items.Type}
  //             </p>
  //             <p>
  //               {" "}
  //               <strong>RunTime:</strong>
  //               {this.state.items.Runtime}
  //             </p>
  //             <p>
  //               {" "}
  //               <strong>Released:</strong>
  //               {this.state.items.Released}
  //             </p>
  //             <p>
  //               {" "}
  //               <strong>Languages:</strong>
  //               {this.state.items.Language}
  //             </p>
  //             <p>
  //               {" "}
  //               <strong>Genre:</strong>
  //               {this.state.items.Genre}
  //             </p>
  //             <p>
  //               {" "}
  //               <strong>Production:</strong>
  //               {this.state.items.Production}
  //             </p>
  //             <p>
  //               {" "}
  //               <strong>BoxOffice:</strong>
  //               {this.state.items.BoxOffice}
  //             </p>
  //           </div>
  //           <div className="col-6">
  //             <img src={this.state.items.Poster} />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="card moviename">
  //         <p>
  //           <strong>Cast</strong>
  //         </p>
  //         <p>
  //           <strong>Actors:</strong>
  //           {this.state.items.Actors}
  //         </p>
  //         <p>
  //           {" "}
  //           <strong>Director:</strong>
  //           {this.state.items.Director}
  //         </p>
  //         <p>
  //           {" "}
  //           <strong>Writer:</strong>
  //           {this.state.items.Writer}
  //         </p>
  //       </div>
  //       <div className="card moviename">
  //         <p>
  //           {" "}
  //           <strong>Awards/Rating</strong>
  //         </p>
  //         <p>
  //           {" "}
  //           <strong>Awards:</strong>
  //           {this.state.items.Awards}
  //         </p>
  //         <p>
  //           {" "}
  //           <strong>ImDb Rating:</strong>
  //           {this.state.items.imdbRating}
  //         </p>
  //         <div>
  //           <strong>Rating:</strong>
  //           {this.state.items.Ratings.map((ele: any, index: any) => {
  //             return (
  //               <div key={index}>
  //                 <div>
  //                   <strong>Source</strong>
  //                   {ele.Source}
  //                 </div>
  //                 <div>
  //                   <strong>Value</strong>
  //                   {ele.Value}
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   );
  //   this.setState({
  //     available: true
  //   });
  // }
  render() {
    // if (this.state.available) {
    //   return <div>{this.arr}</div>;
    // } else {
    //   return <div>Not Available</div>;
    // }
    if (this.state.available) {
      return <div>{this.arr}</div>;
    }
    return null;
    // } else {
    //   // return <div>Loading</div>;
    // }
  }
}
const setstatetoprops = (state: any) => {
  return {
    name: state
  };
};
export default connect(setstatetoprops)(Particularmovie);
