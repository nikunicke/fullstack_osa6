import React from 'react'
import { connect } from 'react-redux'
import { notificationChange } from '../reducers/notificationReducer'

const Notification = (props) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    const activateNotification = (time) => {
        if (props.notification !== null) {
            setTimeout(() => {
                props.notificationChange(null, props.time)
            }, time * 1000)
            return (
                <div style={style}>
                    {props.notification}
                </div>
            )
        }
        return null
    }

    return (
        <div>
            {activateNotification(props.time)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification.notification,
        time: state.notification.time
    }
}

const mapDispatchToProps = {
    notificationChange
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification)