import React,{Component} from 'react'

class App extends Component{
  render(){
    return (
      <ul className="my-list">
        <li>{false?'js':'css'}</li>
        <li>i love react</li>
      </ul>
    )
  }
}

export default App;