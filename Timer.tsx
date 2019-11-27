import React, { Component } from 'react';

export default class Timer extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentDateTime: new Date()
    }
    this.functionHandler = this.UpdateDateTime.bind(this);
  }

  UpdateDateTime(){
    setInterval(() => {  
      this.setState({
        currentDateTime: new Date()
      })
    }, 1000)
  }

  componentDidMount(){
    this.UpdateDateTime();
  }

  componentWillMount(){
    clearInterval(this.functionHandler);
  }

  render() {
    return(
      <div>
      {this.state.currentDateTime.toString()}
    </div>
    )
  }
}