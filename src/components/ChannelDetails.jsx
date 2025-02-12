import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";

export default function ChannelDetails() {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channel?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.meta);
      setVideos(data.data);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetail={channelDetail}
          marginTop="-93px"
          indexPfp={2}
        />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "50px" } }} />
        <Videos videos={videos} indexImg={3} />
      </Box>
    </Box>
  );
}
