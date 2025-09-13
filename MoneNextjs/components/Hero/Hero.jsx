import React, { useRef, useEffect, useCallback } from 'react';
import { heroData } from './HeroData';

const Hero = () => {
  const videoRef = useRef(null);

  const tryPlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;

    // Ensure muted flags are set BEFORE play (iOS/Safari quirk)
    el.defaultMuted = true;
    el.muted = true;

    const p = el.play?.();
    if (p && typeof p.then === 'function') {
      p.catch((err) => {
        // Autoplay might be blocked; we'll try again on canplay
        console.log('Autoplay prevented initially:', err);
      });
    }
  }, []);

  useEffect(() => {
    tryPlay();
  }, [tryPlay]);

  const handleCanPlay = () => {
    // Another chance to start if first attempt failed
    tryPlay();
  };

  const handleMouseEnter = () => {
    const el = videoRef.current;
    if (!el) return;
    // Unmute on user interaction and ensure playback
    el.muted = false;
    el.volume = 1;
    el.play?.().catch(() => {});
  };

  const handleMouseLeave = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.volume = 0;
  };

  // Optional: click-to-unmute as a fallback for browsers that ignore hover
  const handleClick = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.volume = 1;
    el.play?.().catch(() => {});
  };

  return (
    <section className="hero">
      <div
        className="video-background"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          className="hero-video"
          src={heroData.video.src}
          poster={heroData.video.poster}
          // Autoplay-friendly attributes
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          onCanPlay={handleCanPlay}
        >
          Sorry, your browser doesn’t support embedded videos.
        </video>
      </div>
    </section>
  );
};

export default Hero;
