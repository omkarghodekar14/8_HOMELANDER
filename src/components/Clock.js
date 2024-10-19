import React, { Component } from "react";
import '../components/style.css';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getIndianTime()
    };
  }

  getIndianTime = () => {
    const currentTime = new Date();
    // Convert to Indian Standard Time (UTC +5:30)
    const utcOffset = currentTime.getTimezoneOffset() * 60000; // getTimezoneOffset() returns minutes, converting it to milliseconds
    const indiaOffset = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30 hours
    return new Date(currentTime.getTime() + utcOffset + indiaOffset);
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: this.getIndianTime()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
    );
  }
}
