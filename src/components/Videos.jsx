import React from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

export default function Videos({ videos }) {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.type === "video" && <VideoCard video={item} />}
          {item.type === "channel" && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}
