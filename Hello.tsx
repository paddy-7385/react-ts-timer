import React, { Component } from 'react';

export default class Hello extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentDateTime: new Date().toString()
    }
  }

  UpdateDateTime(){
    setInterval(() => {  
      this.setState({
        currentDateTime: new Date().toString()
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
      {this.state.currentDateTime}
    </div>
    )
  }
}