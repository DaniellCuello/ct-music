import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { recentSongs } from '@/constants/songs';
import type { Song } from '@/types/music';

interface PlayerContextValue {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  playSong: (song: Song) => void;
  togglePlayback: () => void;
  seek: (value: number) => void;
  skip: (seconds: number) => void;
  nextSong: () => void;
  previousSong: () => void;
}

const PlayerContext = createContext<PlayerContextValue | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying || !currentSong) {
      return;
    }

    const timer = setInterval(() => {
      setProgress((value) => {
        if (value >= 1) {
          setIsPlaying(false);
          return 1;
        }

        return Math.min(value + 0.01, 1);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSong, isPlaying]);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setProgress(0);
    setIsPlaying(true);
  };

  const togglePlayback = () => {
    if (currentSong) {
      setIsPlaying((value) => !value);
    }
  };

  const seek = (value: number) => {
    setProgress(Math.max(0, Math.min(value, 1)));
  };

  const skip = (seconds: number) => {
    seek(progress + seconds / 100);
  };

  const changeSong = (direction: 1 | -1) => {
    if (!currentSong) {
      return;
    }

    const currentIndex = recentSongs.findIndex(
      (song) => song.id === currentSong.id || song.title === currentSong.title,
    );
    const nextIndex =
      (currentIndex + direction + recentSongs.length) % recentSongs.length;

    setCurrentSong(recentSongs[nextIndex]);
    setProgress(0);
    setIsPlaying(true);
  };

  const nextSong = () => changeSong(1);
  const previousSong = () => changeSong(-1);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        progress,
        playSong,
        togglePlayback,
        seek,
        skip,
        nextSong,
        previousSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('usePlayer must be used inside PlayerProvider');
  }

  return context;
}