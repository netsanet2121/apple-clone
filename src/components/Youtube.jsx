import { useState, useEffect } from "react";

import "./Youtube.css";

function Youtube() {
  const [youTubeVedios, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyChJ012qE6dDkC6gmL4jXh861x6Tiqs5Yw`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setYouTubeVideos(data.items);
      });
  }, []);
  return (
    <div className="youtubeWrapper row">
      {youTubeVedios?.map((singleVideo, i) => {
        let vidId = singleVideo.id.videoId;
        let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
        let videoWrapper = (
          <div key={i} className="col-sm-12 col-md-6 col-lg-6 ">
            <div className="singleVideoWrapper">
              <div className="videoThumbnail">
                <a href={vidLink} target="_blank" rel="noreferrer">
                  <img
                    src={singleVideo.snippet.thumbnails.high.url}
                    alt="thumbnails"
                  />
                </a>
              </div>
              <div className="videoInfoWrapper">
                <div className="videoTitle">
                  <a href={vidLink} target="_blank" rel="noreferrer">
                    {singleVideo.snippet.title}
                  </a>
                </div>
                <div className="videoDesc">
                  {singleVideo.snippet.description}
                </div>
                <div className="videoDesc">
                  publishTime: {singleVideo.snippet.publishTime}
                </div>
              </div>
            </div>
          </div>
        );
        return videoWrapper;
      })}
    </div>
  );
}
export default Youtube;

// const APPLE_CHANNEL_ID = 'UCE_M8A5yxnLfW0KghEeajjw'
// const EVANDADI_CHANNEL_ID = 'UCxA7AzkI2Sndf8S1G5rSkwQ'
// https://www.googleapis.com/youtube/v3/search?key={YOUR_API_KEY}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=10

// get channel id: https://commentpicker.com/youtube-channel-id.php
