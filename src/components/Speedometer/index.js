import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  increaseSpeed = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState({count: count + 10})
    }
  }

  applyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState({count: count - 10})
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="paragraph">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="btn1" onClick={this.increaseSpeed} type="button">
            Accelerate
          </button>
          <button className="btn2" onClick={this.applyBrake} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
