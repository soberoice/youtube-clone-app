import React from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

export default function Videos({ videos, indexImg, direction }) {
  if (!videos?.length) return "loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.videoId && <VideoCard video={item} index={indexImg} />}
          {item.type === "channel" && (
            <ChannelCard channelDetail={item} indexPfp={0} />
          )}
        </Box>
      ))}
    </Stack>
  );
}
