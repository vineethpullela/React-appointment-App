import {Component} from 'react'
import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="appointment-input">
            <form className="form">
              <label className="title-label" htmlFor="titleInput">
                TITLE
              </label>
              <input type="text" id="titleIinput" className="title-input" />
              <label className="date-label" htmlFor="dateInput">
                DATE
              </label>
              <input type="date" id="dateInput" className="date-input" />
              <button className="submit-button" type="submit">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="app-img"
              alt="appointments"
            />
          </div>
          <hr className="line" />
        </div>
      </div>
    )
  }
}

export default Appointments
