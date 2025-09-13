import React, { useState, useRef, useEffect } from 'react';
import { featuredVideos } from './AboutData';

const About = () => {
  const [currentVideo, setCurrentVideo] = useState(featuredVideos[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // reset the video when a new one is selected
    el.load();
  }, [currentVideo]);

  const handleVideoSelect = (video) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentVideo(video);
  };

  // Play + unmute when hovering over the video
  const handleVideoEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  // Pause + mute when leaving the video
  const handleVideoLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  return (
    <section className="featured-videos" id="featured">
      <div className="container">
        <h2 className="section-title">Featured Videos</h2>

        <div className="featured-video-container">
          {/* Main video player + title */}
          <div
            className="main-video"
            onMouseEnter={handleVideoEnter}
            onMouseLeave={handleVideoLeave}
          >
            <div className="player">
              <video
                key={currentVideo.id}
                ref={videoRef}
                loop
                playsInline
                muted
                poster={currentVideo.poster}
                preload="metadata"
              >
                <source
                  key={currentVideo.src}
                  src={currentVideo.src}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="main-info">
              <h3>{currentVideo.title}</h3>
            </div>
          </div>

          {/* Video playlist */}
          <div className="video-playlist">
            {featuredVideos.map((video, index) => (
              <div
                key={index}
                className={`playlist-item ${
                  currentVideo.id === video.id ? 'active' : ''
                }`}
                onClick={() => handleVideoSelect(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === 'Enter' ? handleVideoSelect(video) : null
                }
                aria-selected={currentVideo.id === video.id}
              >
                <div className="thumbnail">
                  <img src={video.poster} alt={video.title} />
                </div>
                <div className="video-info">
                  <h4>{video.title}</h4>
                  <p>{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
