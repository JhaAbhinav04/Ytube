import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { FetchFromAPI } from "../utils/FetchFromAPI";
import { Videos } from "./";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  // Receiving Search Query from URL and passing into API Request
  const {searchTerm} = useParams();

  // Render videos as the page loads
  useEffect(() => {
    setVideos(null);

    FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, searchTerm);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {/* Heading */}
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for :  <span style={{ color: "#FC1503" }}>{searchTerm}</span> Videos
        </Typography>

        {/* Videos */}
        <Videos videos={videos} />
      </Box>
  );
};

export default SearchFeed;
