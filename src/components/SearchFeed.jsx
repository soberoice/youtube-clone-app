import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromApi";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&query=${searchTerm}`).then((data) =>
      setVideos(data.data)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
        margin: { xs: "auto" },
        width: { xs: "350px", md: "100%" },
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        {searchTerm}
        <span style={{ color: "#F31503" }}> Search Results</span>
      </Typography>
      <Videos videos={videos} indexImg={1} />
    </Box>
  );
}
