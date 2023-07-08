import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showButton: false}

  changeButton = () => {
    this.setState(prevState => ({
      showButton: !prevState.showButton,
    }))
  }

  render() {
    const {showButton} = this.state
    return (
      <div className="app-container">
        <button
          onClick={this.changeButton}
          type="button"
          className="toggle-button"
        >
          {showButton ? 'hide clock' : 'show clock'}
        </button>
        {showButton && <Clock />}
      </div>
    )
  }
}

export default App
