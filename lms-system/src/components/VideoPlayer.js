// src/components/VideoPlayer.js
import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ videoUrl, onVideoEnd }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      onVideoEnd();
    };

    const iframe = iframeRef.current;
    const player = iframe.contentWindow;

    // Event listener for video end
    iframe.addEventListener('load', () => {
      player.postMessage('{"event":"listening"}', '*');
      player.postMessage('{"event":"command","func":"addEventListener","args":["onStateChange","onVideoEnd"]}', '*');
    });

    return () => {
      iframe.removeEventListener('load', handleVideoEnd);
    };
  }, [onVideoEnd]);

  return (
    <div className="video-container">
      <iframe
        ref={iframeRef}
        width="560"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
