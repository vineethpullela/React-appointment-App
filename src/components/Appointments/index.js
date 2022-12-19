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
          <div className="appointments-container">
            <h1 className="appointments-heading">Appointments</h1>
            <button type="button" className="starred-button">
              Starred
            </button>
          </div>
          <div className="appointments-list-container">
            <div className="appointment-list-item">
              <div className="appointment-name-container">
                <p className="appointment-name">Dentist</p>
                <button type="button" className="starred-item-button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
                    className="star-img"
                    alt="star"
                  />
                </button>
              </div>
              <p className="appointment-date">Date: 20 july 2021, Tuesday</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
