import React from 'react'
import moment from "moment";

const Notification = (props) => {
    console.log(props);
    const notificationList = props.notifications && props.notifications
        .map(notification =>
            <li key={notification.id}>
                <span className="pink-text">{notification.user}</span>
                <span> {notification.content}</span>
                <div className="grey-text note-date">
                    {moment(notification.time.toDate()).fromNow()}
                </div>

            </li>);
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Notifications
                    </span>
                    <ul className="notifications">
                        {notificationList}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Notification;