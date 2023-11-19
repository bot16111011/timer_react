import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };

    this.timer = null;
    console.log("TimerOne Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne derived State");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log("TimerOne render");
    return (
      <>
        <h1>
          Time Spent :-{" "}
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }

  componentDidMount() {
    console.log("TimerOne didMount");
    console.log("_______________________________");

    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimeOne getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("TimeOne did Update");
    console.log("_______________________________");
  }
}
