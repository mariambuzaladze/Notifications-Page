import React from "react";
import "./notification.css";

export default function Notification({ notifications, onClick }) {
  return (
    <div className="messages">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`message ${notification.unread ? "unread" : ""}`}
          onClick={() => onClick(notification.id)}
        >
          <img src={notification.avatar} alt={notification.name} />

          <div className="text">
            <p className="author">
              {notification.name}
              <span> {notification.text}</span>
            </p>

            <div className="circle"></div>

            <p className="time">{Math.floor(Math.random() * 10)} days ago</p>

            {notification.message && (
              <div className="private-text">{notification.message}</div>
            )}

            {notification.image && (
              <img src={notification.image} alt="picture" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
