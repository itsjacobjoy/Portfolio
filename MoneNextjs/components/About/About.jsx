import React, { useState, useRef, useEffect, useMemo } from 'react';
import { featuredVideos } from './AboutData';

const About = () => {
  const [currentVideo, setCurrentVideo] = useState(featuredVideos[0]);
  const videoRef = useRef(null);

  // Remember scroll before/after fullscreen
  const scrollBeforeFS = useRef(0);

  // Detect touch devices (no hover on mobile/tablet)
  const isTouch = useMemo(() => {
    if (typeof window === 'undefined') return false;
    try {
      return window.matchMedia('(hover: none)').matches;
    } catch {
      return false;
    }
  }, []);

  // Load the selected video but do NOT autoplay it
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.pause();
      v.muted = true;   // default muted unless hovered
      v.load();         // commit new <source>
    } catch (_) {}
  }, [currentVideo]);

  // Hover sound only (desktop)
  const handleMouseEnter = () => {
    if (isTouch) return;
    const v = videoRef.current;
    if (v) v.muted = false;
  };
  const handleMouseLeave = () => {
    if (isTouch) return;
    const v = videoRef.current;
    if (v) v.muted = true;
  };

  const handleVideoSelect = (video) => {
    const v = videoRef.current;
    if (v) v.pause();
    setCurrentVideo(video);
  };

  // Keep scroll position when entering/exiting fullscreen
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const onFSChange = () => {
      const isFS =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      if (isFS) {
        // entering fullscreen — remember current scroll
        scrollBeforeFS.current = window.scrollY || window.pageYOffset || 0;
      } else {
        // exiting fullscreen — restore scroll
        window.scrollTo({ top: scrollBeforeFS.current, behavior: 'instant' in window ? 'instant' : 'auto' });
      }
    };

    document.addEventListener('fullscreenchange', onFSChange);
    document.addEventListener('webkitfullscreenchange', onFSChange);
    document.addEventListener('mozfullscreenchange', onFSChange);
    document.addEventListener('MSFullscreenChange', onFSChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFSChange);
      document.removeEventListener('webkitfullscreenchange', onFSChange);
      document.removeEventListener('mozfullscreenchange', onFSChange);
      document.removeEventListener('MSFullscreenChange', onFSChange);
    };
  }, []);

  return (
    <section className="featured-videos" id="featured">
      <div className="container">
        <h2 className="section-title">Featured Videos</h2>

        <div className="featured-video-container">
          {/* Main video player + title */}
          <div className="main-video">
            <div
              className="player"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <video
                key={currentVideo.id}
                ref={videoRef}
                controls
                playsInline
                loop
                muted
                preload="metadata"
                poster={currentVideo.poster}
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
            {featuredVideos.map((video) => {
              const active = currentVideo.id === video.id;
              return (
                <div
                  key={video.id}
                  className={`playlist-item ${active ? 'active' : ''}`}
                  onClick={() => handleVideoSelect(video)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' ? handleVideoSelect(video) : null)}
                  aria-pressed={active}
                >
                  <div className="thumbnail">
                    <img src={video.poster} alt={video.title} />
                  </div>
                  <div className="video-info">
                    <h4>{video.title}</h4>
                    <p>{video.duration}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
