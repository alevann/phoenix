import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import useDictionary from '../hooks/useDictionary'
import Content from '../components/Content'
import Guesser from '../components/Guesser'

const Home: NextPage = () => {
  const { dictionary } = useDictionary('en')

  return (
    <div className={styles.container}>

      <Content>
        {
          dictionary && (
            <Guesser dictionary={dictionary} />
          )
        }
      </Content>

    </div>
  )
}

export default Home
