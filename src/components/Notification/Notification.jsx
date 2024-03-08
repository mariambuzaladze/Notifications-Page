import "./notification.css";
import Mark from "/images/avatar-mark-webber.webp";
import Angela from "/images/avatar-angela-gray.webp";
import Jacob from "/images/avatar-jacob-thompson.webp";
import Rizky from "/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "/images/avatar-kimberly-smith.webp";
import Nathan from "/images/avatar-nathan-peterson.webp";
import Anna from "/images/avatar-anna-kim.webp";

export default function Notification() {
  const read = (event) => {
    event.currentTarget.classList.remove("unread");
  };

  const data = [
    {
      id: 1,
      avatar: Mark,
      name: "Mark Webber",
      text: "reacted to your recent post. My first tournament today!",
    },
    { id: 2, avatar: Angela, name: "Angela Gray", text: "followed you" },
    {
      id: 3,
      avatar: Jacob,
      name: "Jacob Thompson",
      text: "has joined your group Chess Club",
    },
    {
      id: 4,
      avatar: Rizky,
      name: "Rizky Hasanuddin",
      text: "sent you a private message",
      message:
        "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    },
    {
      id: 5,
      avatar: Kimberly,
      name: "Kimberly Smith",
      text: "commented on your picture",
    },
    {
      id: 6,
      avatar: Nathan,
      name: "Nathan Peterson",
      text: "reacted to your recent post 5 end-game strategies to increase your win rate",
    },
    {
      id: 7,
      avatar: Anna,
      name: "Anna Kim",
      text: "left the group Chess Club",
    },
  ];

  return (
    <div className="messages">
      {data.map((person) => (
        <div key={person.id} className="message unread" onClick={read}>
          <img src={person.avatar} alt={person.name} />

          <div className="text">
            <p className="author">
              {person.name}
              <span> {person.text}</span>
            </p>

            <div className="circle"></div>

            <p className="time">{Math.floor(Math.random() * 10)} days ago</p>

            {person.message && (
              <div className="private-text">{person.message}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
