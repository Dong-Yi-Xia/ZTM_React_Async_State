import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //Pass in props inside both teh constructor and super
  constructor(props){
    super(props)
    this.state = {
      meaningOfLife: 47
    }
    this.props = props
  }

  // If you want to setup state quickly, set state as a class
  // state = {
  //   meaningOfLife : 47
  // }



  // Bad Practice
  // handleClick = () => {
  //   this.setState({
  //     meaningOfLife: this.state.meaningOfLife + 1
  //   })
  // }


  handleClick = () => {
    //this.setState is asynchronously 
    //Don't call this.state/this.props directly, especially calculation
    //But rather use a function, prevState, prevProps contain the latest infomation 
    this.setState((prevState, prevProps) => {
      return { meaningOfLife: prevState.meaningOfLife + prevProps.increment  }
    }, // second parameter
      () => console.log(this.state.meaningOfLife)
    )
  }

  
  render(){
// console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button
            onClick={this.handleClick}
          >
            Update State
          </button>
        </header>
      </div>
    );
  }
}

export default App;
