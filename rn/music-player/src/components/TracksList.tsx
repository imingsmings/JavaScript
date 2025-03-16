import { FlatList, FlatListProps, View } from 'react-native'
import { TrackListItem } from './TrackListItem'
import { utilStyles } from '@/styles'
import { Track } from 'react-native-track-player'

export type TracksListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[]
}

const ItemDivider = () => {
  return <View style={{ ...utilStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
}

export const TracksList = ({ tracks, ...props }: TracksListProps) => {
  const onTrackSelect = (track: Track) => {
    console.log(track)
  }

  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 90
      }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item }) => {
        return (
          <TrackListItem
            track={item}
            onTrackSelect={onTrackSelect}
          />
        )
      }}
      {...props}
    />
  )
}
