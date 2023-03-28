import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromAPI } from '../utils/FetchFromAPI';
import { Videos, ChannelCard } from './';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  // console.log(channelDetail, videos);

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))

    // Channel Videos
    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id])
  
  return (
    <Box minHeight="95vh">
      {/* YT Channel Logo and Gradient */}
      <Box>
        {/* Gradient */}
        <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '300px' }} />
        
        {/* Channel Card */}
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>

      {/* Videos Display */}
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail