import UnknownArtistImage from '@/assets/unknown_artist.png'
import UnknownTrackImage from '@/assets/unknown_track.png'
import { Image } from 'react-native'

export const unknownArtistImageUri = Image.resolveAssetSource(UnknownArtistImage).uri
export const unknownTrackImageUri = Image.resolveAssetSource(UnknownTrackImage).uri
