import React from "react";
interface IProps {
  data: any;
}
interface IState {
  items: any;
  available: boolean;
}
class MovieReviews extends React.Component<IProps, IState> {
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
          <div>
            <strong>Rating:</strong>
            {this.state.items.Ratings.map((ele: any, index: any) => {
              return (
                <div key={index}>
                  <div>
                    <strong>Source</strong>
                    {ele.Source}
                  </div>
                  <div>
                    <strong>Value</strong>
                    {ele.Value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
    this.setState({
      available: true
    });
  }
  render() {
    return <div>{this.arr}</div>;
  }
}

export default MovieReviews;
