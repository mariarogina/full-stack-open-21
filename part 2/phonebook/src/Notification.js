import React from "react";

const Notification = ({ message, notifClass }) => {
  return (
    <div className={notifClass}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
