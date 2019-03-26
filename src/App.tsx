import React, { Component } from 'react';
import './App.css';

interface IProps {}
interface IState {
  count: number;
  fizzBuzz: string;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 1,
      fizzBuzz: this.toFizzBuzz(1)
    };
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  toFizzBuzz(value: number): string {
    if (value <= 0) {
      return '';
    }
    const fizzBuzz: string =
      `${value % 3 === 0 ? 'Fizz' : ''}${value % 5 === 0 ? 'Buzz' : ''}` ||
      value.toString();
    return fizzBuzz;
  }

  countUp() {
    const value = this.state.count + 1;
    this.setState({
      count: value,
      fizzBuzz: this.toFizzBuzz(value)
    });
  }

  countDown() {
    const value = this.state.count === 1 ? 1 : this.state.count - 1;
    this.setState({
      count: value,
      fizzBuzz: this.toFizzBuzz(value)
    });
  }

  render() {
    return (
      <div>
        <div className="count">{this.state.fizzBuzz}</div>
        <input type="button" value="+" onClick={this.countUp} />
        <input type="button" value="-" onClick={this.countDown} />
      </div>
    );
  }
}

export default App;
