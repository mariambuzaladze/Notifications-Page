import { useState } from "react";
import "./page.css";
import Notification from "../Notification/Notification";

import Mark from "/images/avatar-mark-webber.webp";
import Angela from "/images/avatar-angela-gray.webp";
import Jacob from "/images/avatar-jacob-thompson.webp";
import Rizky from "/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "/images/avatar-kimberly-smith.webp";
import Nathan from "/images/avatar-nathan-peterson.webp";
import Anna from "/images/avatar-anna-kim.webp";
import Picture from "/images/image-chess.webp";

export default function Page() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      avatar: Mark,
      name: "Mark Webber",
      text: "reacted to your recent post. My first tournament today!",
      unread: true,
    },
    {
      id: 2,
      avatar: Angela,
      name: "Angela Gray",
      text: "followed you",
      unread: true,
    },
    {
      id: 3,
      avatar: Jacob,
      name: "Jacob Thompson",
      text: "has joined your group Chess Club",
      unread: true,
    },
    {
      id: 4,
      avatar: Rizky,
      name: "Rizky Hasanuddin",
      text: "sent you a private message",
      message:
        "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      unread: true,
    },
    {
      id: 5,
      avatar: Kimberly,
      name: "Kimberly Smith",
      text: "commented on your picture",
      image: Picture,
      unread: true,
    },
    {
      id: 6,
      avatar: Nathan,
      name: "Nathan Peterson",
      text: "reacted to your recent post 5 end-game strategies to increase your win rate",
      unread: true,
    },
    {
      id: 7,
      avatar: Anna,
      name: "Anna Kim",
      text: "left the group Chess Club",
      unread: true,
    },
  ]);

  function handleClick(notificationId) {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, unread: false }
          : notification
      )
    );
  }

  function markAllAsRead() {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  }

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  return (
    <div className="content">
      <header>
        <div className="title">
          <h1>Notifications</h1>
          <div className="container">{unreadCount}</div>
        </div>
        <p className="read" onClick={markAllAsRead}>
          Mark all as read
        </p>
      </header>
      <main>
        <Notification notifications={notifications} onClick={handleClick} />
      </main>
    </div>
  );
}
