type Optional<T> = T | undefined

type Word = {
  latin: string
  phonetic: string
  definition: string
}
type Dictionary = Array<Word>
