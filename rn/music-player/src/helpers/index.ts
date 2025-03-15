export const trackTitleFilter = (title: string) => {
  return (track?: any) => {
    return track.title?.toLowerCase().includes(title.toLowerCase())
  }
}
