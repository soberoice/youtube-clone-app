import { BrowserRouter, Routes, Route } from "react-router";
import { Box } from "@mui/material";
import {
  NavBar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./components";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetails />}></Route>
            <Route path="/channel/:id" element={<ChannelDetails />}></Route>
            <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>

            <Route element={<PrivateRoute />}>
              <Route exact path="/profile" element={<ProfilePage />} />
              {/* <Route path="/update-profile" element={<UpdateProfile />} /> */}
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </Box>
    </BrowserRouter>
  );
}
