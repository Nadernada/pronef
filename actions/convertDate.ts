const current = new Date()

export function convertDate(date: string) {
  return ((Date.parse(current.toString()) - Date.parse(date)) / (1000 * 60)).toFixed()
}


export const timeElapsed = (date: string) => {
  const timeAgo = Number(convertDate(date))

  return timeAgo > 59 ? (timeAgo /60).toFixed() + 'h ago' : timeAgo + 'min ago'
}