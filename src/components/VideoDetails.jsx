import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
// import CommentContainer from "./CommentContainer";

function VideoDetails() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [comments, setComment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`video?id=${id}`).then((data) => setVideoDetail(data));
    fetchFromAPI(`related?id=${id}`).then((data) => setVideos(data.data));
    // fetchFromAPI(`comments?id=${id}`).then((data) => setComment(data));
  }, [id]);
  if (!videoDetail) return "loading....";

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetail.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.viewCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 3, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} indexImg={1} direction="column" />
        </Box>
      </Stack>
      <Box>{/* <CommentContainer comments={comments} /> */}</Box>
    </Box>
  );
}

export default VideoDetails;
