import React from "react";
import { Link } from "react-router";
import { Typography, Card, CardContent, CardMedia, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoVideoUrl,
} from "../utils/constants";
export default function VideoCard({
  video: {
    videoId,
    thumbnail,
    title,
    channelId,
    channelTitle,
    lengthText,
    publishedText,
  },
  index,
}) {
  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "358px",
          md: "320px",
        },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={thumbnail[index]?.url || demoThumbnailUrl}
          alt={title}
          sx={{ width: { xs: "345px", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Stack direction="row" display="flex" justifyContent="space-between">
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              fontSize="14px"
              color="grey"
            >
              {channelTitle.slice(0, 12) || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "grey", ml: "5px" }} />
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              fontSize="14px"
              color="grey"
            >
              {publishedText}
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              fontSize="14px"
              color="grey"
            >
              {lengthText}
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
}
