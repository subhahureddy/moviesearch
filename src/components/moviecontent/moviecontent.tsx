import React from "react";
interface IProps {
  data: any;
}
interface IState {
  items: any;
  available: boolean;
}
class MovieContent extends React.Component<IProps, IState> {
  arr: any = [];
  constructor(props: IProps) {
    super(props);
    this.state = {
      items: this.props.data,
      available: false
    };
  }
  componentWillMount() {
    this.maparray();
  }
  componentWillReceiveProps(nextprops: IProps) {
    this.setState(
      {
        items: nextprops.data
      },
      () => {
        this.maparray();
      }
    );
  }
  maparray() {
    this.arr = (
      <div>
        <div className="card moviename">
          <p>
            <strong>{this.state.items.Title}</strong>
          </p>
          <div className="row">
            <div className="col-6">
              <p>
                {" "}
                <strong>Type:</strong>
                {this.state.items.Type}
              </p>
              <p>
                {" "}
                <strong>RunTime:</strong>
                {this.state.items.Runtime}
              </p>
              <p>
                {" "}
                <strong>Released:</strong>
                {this.state.items.Released}
              </p>
              <p>
                {" "}
                <strong>Languages:</strong>
                {this.state.items.Language}
              </p>
              <p>
                {" "}
                <strong>Genre:</strong>
                {this.state.items.Genre}
              </p>
              <p>
                {" "}
                <strong>Production:</strong>
                {this.state.items.Production}
              </p>
              <p>
                {" "}
                <strong>BoxOffice:</strong>
                {this.state.items.BoxOffice}
              </p>
            </div>
            <div className="col-6">
              <img src={this.state.items.Poster} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.arr}</div>;
  }
}

export default MovieContent;
