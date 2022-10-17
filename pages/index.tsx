import type { NextPage } from 'next'
import useDictionary from '../hooks/useDictionary'

const Home: NextPage = () => {
  const { dictionary } = useDictionary('en')

  return (
    <div>

    </div>
  )
}

export default Home
