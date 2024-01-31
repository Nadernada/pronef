const current = new Date()

export function convertDate(date: string) {
  return ((Date.parse(current.toString()) - Date.parse(date)) / (1000 * 60)).toFixed()
}