import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";

import { Grid2 } from "@mui/material";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Login } from "@mui/icons-material";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      console.log(error.message);
      setError("Failed to create an account");
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
      <Box
        sx={{
          margin: "auto",
          textAlign: "center",
          width: { xs: "320px", sm: "360px", md: "400px" },
        }}
      >
        <Typography variant="h5">Sign Up</Typography>
        {error && (
          <Alert severity="error" style={{ marginTop: "1em" }}>
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Stack marginTop="2em">
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
              label="Confirm Password"
              inputRef={confirmPasswordRef}
              type="password"
            />
          </Stack>
          <Button
            variant="contained"
            style={{ background: "#F31503", width: "100%" }}
            fullWidth
            type="submit"
            disabled={loading}
          >
            sign up <Login sx={{ margin: "auto 10px", fontSize: "20px" }} />
          </Button>
        </form>
        <div style={{ marginTop: "1em" }}>
          <Typography>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#F21503" }}>
              Log in
            </Link>
          </Typography>
        </div>
      </Box>
    </Grid2>
  );
}
