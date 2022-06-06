import * as React from "react";
import { useState, useEffect } from "react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import getRandomAvatar from "../functions/getRandomAvatar";

export default function PickUsername() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      navigate("/mainroom");
    }
  }, []);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = () => {
    if (username.length <= 3) {
      toast.error("Username must be longer than 3 characters", toastOptions);
    } else {
      const avatar = getRandomAvatar(username).then((res) => {
        const obj = JSON.stringify({ username: username, avatar: res });
        window.localStorage.setItem("user", obj);
        navigate("/mainroom");
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#00000076",
          width: "fit-content",
          padding: "5rem",
          borderRadius: "5%",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">Pick a username</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Type a username"
            onChange={(event) => handleChange(event)}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "white" }}
            aria-label="search"
            onClick={handleSubmit}
          >
            <Send />
          </IconButton>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
}
