import "./page.css";
import Notification from "../Notification/Notification";

export default function Page() {
  return (
    <div className="content">
      <header>
        <div className="title">
          <h1>Notifications</h1>
          <div className="container">3</div>
        </div>
        <p className="read">Mark all as read</p>
      </header>
      <main>
        <Notification />
      </main>
    </div>
  );
}
