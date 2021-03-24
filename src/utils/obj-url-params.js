export function objToUrlParams(obj) {
  return Object.entries(obj)
    .map(([key, val]) => (!val ? null : `${key}=${val}`))
    .filter(Boolean)
    .join('&');
}
