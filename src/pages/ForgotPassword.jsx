import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { Link, useNavigate } from "react-router";
import {
  Alert,
  Button,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Faild to reset password");
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
        <Typography variant="h5">Change Password</Typography>
        {error && (
          <Alert severity="error" style={{ marginTop: "1em" }}>
            {error}
          </Alert>
        )}
        {message && (
          <Alert severity="success" style={{ marginTop: "1em" }}>
            {message}
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
          </Stack>
          <Button
            variant="contained"
            style={{ background: "#F31503", width: "100%" }}
            fullWidth
            type="submit"
            disabled={loading}
          >
            Reset Password{" "}
          </Button>
          <div style={{ marginTop: "1em" }}>
            <Typography>
              Dont have an account?{" "}
              <Link to="/signup" style={{ color: "#F21503" }}>
                Sign up
              </Link>
            </Typography>
          </div>
        </form>
      </div>
    </Grid2>
  );
}
