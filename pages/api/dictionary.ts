// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import EnglishDictionary from 'assets/en.json'

/**
 * A list of all supported languages
 */
type Language = 'en'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Dictionary>
) {
  req.query.lang = req.query.lang ?? 'en'
  const dict = getDictionaryFromLanguage(req.query.lang as Language)

  if (dict) {
    res.status(200).json(dict)
  } else {
    res.status(404)
  }
}

function getDictionaryFromLanguage (lang: Language): Optional<Dictionary> {
  switch (lang) {
    case 'en':
      return EnglishDictionary as Dictionary
    default:
      console.warn(`Unknown language: ${lang}`)
  }
}
