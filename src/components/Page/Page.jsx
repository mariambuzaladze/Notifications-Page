import { useState } from "react";
import "./page.css";
import Notification from "../Notification/Notification";

export default function Page() {
  const [unreads, setUnreads] = useState(7);

  function allRead() {
    const message = document.getElementsByClassName("message");
    Array.from(message).map((event) => event.classList.remove("unread"));

    setUnreads(0);
  }

  return (
    <div className="content">
      <header>
        <div className="title">
          <h1>Notifications</h1>
          <div className="container">{unreads}</div>
        </div>
        <p className="read" onClick={allRead}>
          Mark all as read
        </p>
      </header>
      <main>
        <Notification setUnreads={setUnreads} />
      </main>
    </div>
  );
}
