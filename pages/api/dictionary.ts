// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

/**
 * A list of all supported languages
 */
type Language = 'en'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Dictionary>
) {
  req.query.lang = req.query.lang ?? 'en'
  const dict = await getDictionaryFromLanguage(req.query.lang as Language)

  if (dict) {
    res.status(200).json(dict)
  } else {
    res.status(404)
  }
}

const cache: { [k in Language]?: Dictionary } = {}

async function getDictionaryFromLanguage (lang: Language): Promise<Optional<Dictionary>> {
  if (!cache[lang]) {
    const file = path.join(process.cwd(), 'assets', `${lang}.json`)
    cache[lang] = await fs.readFile(file, 'utf-8') as unknown as Dictionary
  }
  return cache[lang]
}
