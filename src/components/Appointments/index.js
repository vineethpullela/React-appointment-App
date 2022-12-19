import {Component} from 'react'
import {v4} from 'uuid'
import AppointmentItems from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentList: [],
    isStared: false,
    isActive: false,
  }

  filterAppointmentList = () => {
    const {appointmentList, isActive} = this.state
    this.setState(prevState => ({isActive: !prevState.isActive}))

    const filterdList = appointmentList.filter(
      each => each.isStared === isActive,
    )
    this.setState({appointmentList: filterdList})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date, isStared, isActive} = this.state
    const newAppointment = {
      id: v4(),
      title,
      date,
      isStared,
      isActive,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  changeStaredStatus = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (id === each.id) {
          return {...each, isStared: !each.isStared}
        }
        return each
      }),
    }))
  }

  changeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {title, date, appointmentList, isActive} = this.state
    const staredClassName = isActive ? 'active' : ''

    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="appointment-input">
            <form className="form" onSubmit={this.addAppointment}>
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
            <button
              type="button"
              className={`starred-button ${staredClassName}`}
              onClick={this.filterAppointmentList}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-list-container">
            {appointmentList.map(eachAppointment => (
              <AppointmentItems
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                changeStaredStatus={this.changeStaredStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
