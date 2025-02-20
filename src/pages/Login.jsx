import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

import { Grid2 } from "@mui/material";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Login } from "@mui/icons-material";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      console.log(error.message);
      setError("Failed to log in to account");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Grid2
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "85vh", color: "white" }}
    >
      <div style={{ margin: "auto", textAlign: "center", width: "320px" }}>
        <Typography variant="h5">Log in</Typography>
        {error && (
          <Alert severity="error" style={{ marginTop: "1em" }}>
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Stack marginTop="2em" marginBottom="2em">
            <TextField
              style={{ marginBottom: "1em" }}
              fullWidth
              variant="filled"
              type="email"
              sx={{
                input: { color: "white" },
                label: { color: "#333" },
                borderBottom: { color: "#F21503" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "black", // Background color
                  "&:hover": { backgroundColor: "#333" }, // Hover effect

                  "&::before, &::after": {
                    borderBottom: "2px solid #000 ",
                  },
                  "&.Mui-focused:after": {
                    borderBottom: "2px solid #F21503",
                  },
                },
                "& .MuiInputLabel-root": { color: "gray" },
                "& .MuiInputLabel-root.Mui-focused": { color: "gray" }, // Label color when focused
              }}
              label="Email"
              inputRef={emailRef}
              required
            />
            <TextField
              style={{ marginBottom: "1em" }}
              required
              fullWidth
              variant="filled"
              sx={{
                input: { color: "white" },
                label: { color: "#333" },
                borderBottom: { color: "#F21503" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "black", // Background color
                  "&:hover": { backgroundColor: "#333" }, // Hover effect

                  "&::before, &::after": {
                    borderBottom: "2px solid #000 ",
                  },
                  "&.Mui-focused:after": {
                    borderBottom: "2px solid #F21503",
                  },
                },
                "& .MuiInputLabel-root": { color: "gray" },
                "& .MuiInputLabel-root.Mui-focused": { color: "gray" }, // Label color when focused
              }}
              label="Password"
              inputRef={passwordRef}
              type="password"
            />
            <Link to={"/forgot-password"} style={{ marginLeft: "2px" }}>
              <Typography style={{ color: "#F21503", textAlign: "left" }}>
                Forgot Password?
              </Typography>
            </Link>
          </Stack>
          <Button
            variant="contained"
            style={{ background: "#F31503", width: "100%" }}
            fullWidth
            type="submit"
            disabled={loading}
          >
            Log in <Login sx={{ margin: "auto 10px", fontSize: "20px" }} />
          </Button>
        </form>
        <div style={{ marginTop: "1em" }}>
          <Typography>
            Dont have an account?{" "}
            <Link to="/signup" style={{ color: "#F21503" }}>
              Sign up
            </Link>
          </Typography>
        </div>
      </div>
    </Grid2>
  );
}
