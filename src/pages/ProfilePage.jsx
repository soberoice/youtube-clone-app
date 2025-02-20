import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Avatar, Box, Button, CardContent, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

export default function ProfilePage() {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handlelogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to sign out");
    }
  }
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <Box
          sx={{
            boxShadow: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "356px", md: "300px" },
            height: "320px",
            margin: "auto",
            marginTop: "-93px",
            flexDirection: "column",
          }}
        >
          <Link>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <Avatar
                sx={{
                  borderRadius: "50%",
                  height: "180px",
                  width: "180px",
                  mb: 2,
                  fontSize: "100px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  border: "1px solid #e3e3e3",
                }}
              >
                {currentUser.email.toUpperCase().slice(0, 2)}
              </Avatar>

              <Typography variant="h6">
                {currentUser.email.slice(0, 3)}
              </Typography>
              <Typography sx={{ color: "grey" }}>
                @{currentUser.email}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              style={{
                background: "#F31503",
                width: "100%",
                marginTop: "10px",
              }}
              fullWidth
              onClick={handlelogout}
            >
              log out
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
