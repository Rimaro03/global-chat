import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "avataaars"

export default function MainRoom() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      navigate("/pickusername");
    }
    else {
      setUser(JSON.parse(window.localStorage.getItem("user"))["avatar"]);
    }
  }, []);
  return (
    <div>
      <>
        <p>MAIN ROOM</p>
        <br />
        <Avatar avatarStyle="Circle" />
      </>
    </div>
  );
}
