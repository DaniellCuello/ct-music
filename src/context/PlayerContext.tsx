import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

import { useAudioPlayer, useAudioPlayerStatus, setAudioModeAsync } from 'expo-audio';

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
  const player = useAudioPlayer(null);
  const status = useAudioPlayerStatus(player);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const hasEndedRef = useRef(false);
  const isSwitchingRef = useRef(false);

  useEffect(() => {
    setAudioModeAsync({ playsInSilentMode: true });
  }, []);

  const progress = status.duration > 0 ? status.currentTime / status.duration : 0;

  const safePlay = useCallback(() => {
    try {
      player.play();
    } catch {
      // AbortError en web es cosmético, se ignora
    }
  }, [player]);

  const playSong = useCallback(
    (song: Song) => {
      const fullSong = recentSongs.find(
        (s) => s.id === song.id || s.title === song.title,
      );
      const target = fullSong ?? song;
      if (!target.audio) return;
      isSwitchingRef.current = true;
      hasEndedRef.current = false;
      setCurrentSong(target);
      if (status.playing) {
        player.pause();
      }
      player.replace(target.audio);
      setTimeout(() => {
        safePlay();
        isSwitchingRef.current = false;
      }, 150);
    },
    [player, status.playing, safePlay],
  );

  const togglePlayback = useCallback(() => {
    if (status.playing) {
      player.pause();
    } else {
      safePlay();
    }
  }, [player, status.playing, safePlay]);

  const seek = useCallback(
    (value: number) => {
      player.seekTo(value * status.duration);
    },
    [player, status.duration],
  );

  const skip = useCallback(
    (seconds: number) => {
      player.seekTo(status.currentTime + seconds);
    },
    [player, status.currentTime],
  );

  const changeSong = useCallback(
    (direction: 1 | -1) => {
      const currentIndex = recentSongs.findIndex(
        (s) => s.id === currentSong?.id || s.title === currentSong?.title,
      );
      const nextIndex =
        (currentIndex + direction + recentSongs.length) % recentSongs.length;
      playSong(recentSongs[nextIndex]);
    },
    [currentSong, playSong],
  );

  const nextSong = useCallback(() => changeSong(1), [changeSong]);
  const previousSong = useCallback(() => changeSong(-1), [changeSong]);

  useEffect(() => {
    if (status.playing) {
      hasEndedRef.current = false;
      return;
    }

    if (
      !isSwitchingRef.current &&
      status.duration > 0 &&
      status.currentTime >= status.duration - 1 &&
      !hasEndedRef.current
    ) {
      hasEndedRef.current = true;
      changeSong(1);
    }
  }, [status.playing, status.currentTime, status.duration, changeSong]);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying: status.playing,
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
