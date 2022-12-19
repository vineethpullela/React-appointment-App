import {Component} from 'react'
import AppointmentItems from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: [], isStared: false}

  changeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {title, date} = this.state
    console.log(title, date)
    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="appointment-input">
            <form className="form">
              <label className="title-label" htmlFor="titleInput">
                TITLE
              </label>

              <input
                type="text"
                id="titleInput"
                value={title}
                placeholder="Title"
                className="title-input"
                onChange={this.changeTitleInput}
              />
              <label className="date-label" htmlFor="dateInput">
                DATE
              </label>
              <input
                type="date"
                id="dateInput"
                value={date}
                className="date-input"
                onChange={this.changeDate}
              />
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
          <ul className="appointments-list-container">
            {<AppointmentItems />}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
