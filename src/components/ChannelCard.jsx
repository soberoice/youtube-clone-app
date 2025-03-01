import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router";
import { demoProfilePicture } from "../utils/constants";

export default function ChannelCard({ channelDetail, marginTop, indexPfp }) {
  {
    console.log(channelDetail);
  }
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "320px", md: "300px" },
        height: "320px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.thumbnail[indexPfp]?.url || demoProfilePicture
            }
            alt={channelDetail?.title.slice(0, 15)}
            sx={{
              borderRadius: "50%",
              height: "220px",
              width: "220px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.title}
            <CheckCircle sx={{ fontSize: 14, color: "grey", ml: "5px" }} />
          </Typography>
          <Typography>{channelDetail?.subscriberCount}</Typography>
          <Typography sx={{ color: "grey" }}>
            {channelDetail?.channelHandle}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
}
