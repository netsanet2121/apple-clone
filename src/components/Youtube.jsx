import { useState, useEffect } from "react";
import "./Youtube.css";

function Youtube() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    // const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setYouTubeVideos(data.items);
      })
      .catch((err) => {
        console.error("Failed to fetch YouTube videos", err);
      });
  }, []);

  return (
    <div className="youtubeWrapper row">
      {youTubeVideos?.map((singleVideo, i) => {
        let vidId = singleVideo.id.videoId;
        let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
        return (
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
      })}
    </div>
  );
}

export default Youtube;
