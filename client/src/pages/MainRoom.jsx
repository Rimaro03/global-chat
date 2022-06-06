import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainRoom() {
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("user"))["avatar"];
  const url = `data:image/svg+xml,${user}`;
  console.log(url);

  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      navigate("/pickusername");
    }
  }, []);
  return (
    <div>
      <>
        <p>MAIN ROOM</p>
        <br />
        <img src={url} alt="avatar"></img>
      </>
    </div>
  );
}
