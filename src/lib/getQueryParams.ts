export default function getQueryParams (params: string, keyName: string): string {
  if (params) {
    return ''
  }

  const searchParams = new URLSearchParams(params)
  return searchParams.get(keyName) ?? ''
}