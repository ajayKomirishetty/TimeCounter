import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Clock from './Clock';

class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      deadline : "December 05, 2020",
      newDeadLine : "December 25, 2021"
    }
  }

  changeDeadline()
  {
    this.setState({deadline:"November 7th,1996"});
  }

 render(){
   return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div>Countdown to {this.state.newDeadLine} </div>
          <Clock deadline = {this.state.newDeadLine}>
          </Clock>
          <div>
            <input placeholder="Enter date" onChange = { event => this.setState({ newDeadLine : event.target.value})}/>
            <button type="submit"  value="submit" onClick = {() => this.changeDeadline()}>submit</button>
          </div>
        </div>
      </header>
    </div>
   );
  }
}

export default App;
