import React from "react";
import { Link } from "react-router";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoVideoUrl,
} from "../utils/constants";
export default function VideoCard({
  video: { videoId, thumbnail, title, channelId, channelTitle },
}) {
  return (
    <Card
      sx={{
        width: {
          md: "320px",
          xs: "100%",
          boxShadow: "none",
          borderRadius: 0,
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={thumbnail[0]?.url}
          alt={title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="grey">
            {channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "grey", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
