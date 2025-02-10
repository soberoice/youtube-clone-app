import { BrowserRouter, Routes, Route } from "react-router";
import { Box } from "@mui/material";
import {
  NavBar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./components";

export default function app() {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetails />}></Route>
            <Route path="/channel/:id" element={<ChannelDetails />}></Route>
            <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
      ;
    </div>
  );
}
