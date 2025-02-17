import { BrowserRouter, Routes, Route } from "react-router";
import { Box } from "@mui/material";
import {
  NavBar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./components";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetails />}></Route>
            <Route path="/channel/:id" element={<ChannelDetails />}></Route>
            <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </Box>
    </BrowserRouter>
  );
}
