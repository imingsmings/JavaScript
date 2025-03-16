import { useEffect, useRef } from 'react'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 10
  })
  await TrackPlayer.setVolume(0.03)
  await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
  const isInitialzed = useRef(false)

  useEffect(() => {
    setupPlayer()
      .then(() => {
        isInitialzed.current = true
        onLoad?.()
      })
      .catch((error) => {
        isInitialzed.current = false
        console.log(error)
      })
  }, [onLoad])
}
