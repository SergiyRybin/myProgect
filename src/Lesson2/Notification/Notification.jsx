import PropTypes from 'prop-types'

const Notification = ({messege})=>
<>

<p>{messege}</p>
</>

Notification.propTypes ={
    messege: PropTypes.string
}

export default Notification