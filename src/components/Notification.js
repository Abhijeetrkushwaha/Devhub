import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { db } from '../firebase';

function Notification() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        db.collection('notifications')
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot =>{
            setNotifications(snapshot.docs.map(doc => (
              {notification: doc.data(), id: doc.id}
            )))
        })
      }, [] )

    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul>
                        { notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className="purple-text">{item.notification.text} </span>
                                    
                                    <div className="grey-text note-date">
                                        {item.notification.timestamp && moment(item.notification.timestamp.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification
