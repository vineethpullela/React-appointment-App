import './index.css'

const AppointmentItems = props => {
  return (
    <li className="appointment-list-item">
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
    </li>
  )
}

export default AppointmentItems
