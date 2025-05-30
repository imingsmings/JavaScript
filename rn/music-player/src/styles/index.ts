import { StyleSheet } from 'react-native'
import { colors, fontSize } from '@/constants/tokens'

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  text: {
    fontSize: fontSize.base,
    color: colors.text
  }
})

export const utilStyles = StyleSheet.create({
  itemSeparator: {
    borderColor: colors.textMuted,
    borderWidth: StyleSheet.hairlineWidth,
    opacity: 0.3
  }
})
