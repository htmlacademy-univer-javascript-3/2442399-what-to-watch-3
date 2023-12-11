import {useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  isMuted: boolean;
  src: string;
  poster: string;
}

export function VideoPlayer(props: VideoPlayerProps) {
  const { isPlaying, isMuted, src, poster } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);

    return () => {
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
    };
  }, []);

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!isLoaded || !playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.pause();
  }, [isPlaying, isLoaded]);

  return (
    <video
      width="280"
      height="175"
      muted={isMuted}
      ref={videoRef}
      src={src}
      poster={poster}
    />
  );
}
