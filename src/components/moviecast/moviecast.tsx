import React from "react";
interface IProps {
  data: any;
}
interface IState {
  items: any;
  available: boolean;
}
class MovieCast extends React.Component<IProps, IState> {
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
            <strong>Cast</strong>
          </p>
          <p>
            <strong>Actors:</strong>
            {this.state.items.Actors}
          </p>
          <p>
            {" "}
            <strong>Director:</strong>
            {this.state.items.Director}
          </p>
          <p>
            {" "}
            <strong>Writer:</strong>
            {this.state.items.Writer}
          </p>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.arr}</div>;
  }
}
const setstatetoprops = (state: any) => {
  return {
    name: state
  };
};
export default MovieCast;
