import React from "react";
interface IProps {
  data: any;
}
interface IState {
  items: any;
  available: boolean;
}
class MovieAwards extends React.Component<IProps, IState> {
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
            {" "}
            <strong>Awards/Rating</strong>
          </p>
          <p>
            {" "}
            <strong>Awards:</strong>
            {this.state.items.Awards}
          </p>
          <p>
            {" "}
            <strong>ImDb Rating:</strong>
            {this.state.items.imdbRating}
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
export default MovieAwards;
