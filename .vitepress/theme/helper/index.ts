import newURLMap from '../config/newURLMap'

export function jumpToNewURL() {
  return `
  (function() {
    const newURLMap = ${JSON.stringify(newURLMap)}
    const { pathname, search, origin } = location
    const query = pathname + search
    const oldURL = Object.keys(newURLMap)
    if (oldURL.indexOf(query) > -1) {
      location.href = origin + newURLMap[query]
    }
  })()
  `
}
