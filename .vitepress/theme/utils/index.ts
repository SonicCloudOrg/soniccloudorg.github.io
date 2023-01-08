import newURLMap from '../config/newURLMap'

export function jumpToNewURL() {
  const { pathname, search, origin } = location
  const query: string = pathname + search
  const oldURL: string[] = Object.keys(newURLMap)

  if (oldURL.indexOf(query) > -1) {
    location.href = origin + newURLMap[query]
  }
}
