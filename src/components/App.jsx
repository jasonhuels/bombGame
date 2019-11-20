import React from "react";
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/global.css';
import Home from './Home';
import Bomb from './Bomb';
import Instruction from "./Instruction";
import Defuse from "./Defuse";
import Moment from "moment";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      timerStarted: false,
      bombDefused: false,
      counter: 5
    };
    this.startTimer = this.startTimer.bind(this);
  }
  componentDidMount() {

  }

  startTimer(){
    this.setState({timerStarted: true});
    let countdown = setInterval(()=> { 
      console.log(this.state.counter);
      if(this.state.counter > 0) {
        let dummyTimer = this.state.counter -1;
        this.setState({counter: dummyTimer});

      } else {
        console.log("You are dead");
        return clearInterval(countdown);
        }
      }, 1000);
  }

  endTimer(interval){
    
  }

  render() {
    return (
      <div className="container">
        <style jsx global>{styles}</style>
        <Home />
        <Bomb startTimer={this.startTimer} timerStarted={this.state.timerStarted} counter = {this.state.counter}/>
          <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              <Route path="/Instruction" component={Instruction} />
              <Route path="/Defuse" component={Defuse} />
          </Switch>
      </div>
    );
  }
}

export default App;