import {format} from 'date-fns'
import './index.css'

const AppointmentItems = props => {
  const {appointmentDetails, changeStaredStatus} = props
  const {id, title, date, isStared} = appointmentDetails
  const staredImg = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const formatDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const changeStared = () => {
    changeStaredStatus(id)
  }

  return (
    <li className="appointment-list-item">
      <div className="appointment-name-container">
        <p className="appointment-name">{title}</p>
        <button
          type="button"
          className="starred-item-button"
          onClick={changeStared}
        >
          <img src={staredImg} className="star-img" alt="star" />
        </button>
      </div>
      <p className="appointment-date">Date: {formatDate}</p>
    </li>
  )
}
export default AppointmentItems
