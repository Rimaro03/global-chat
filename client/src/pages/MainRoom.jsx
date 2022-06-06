import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainRoom() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      navigate("/pickusername");
    }

    let user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user["avatar"]);

    <img src={`data:image/svg+xml;base64,${user["avatar"]}`} alt="avatar" />;
  }, []);
  return <div>MainRoom</div>;
}
