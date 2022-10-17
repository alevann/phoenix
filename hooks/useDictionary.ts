import { useQuery } from 'react-query'

export default function useDictionary (lang: string) {
  const { data, ...rest } = useQuery(
    ['dictionary', lang],
    () => fetch('/api/dictionary?lang=en').then(r => r.json()),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  )

  return {
    dictionary: data,
    ...rest
  }
}
