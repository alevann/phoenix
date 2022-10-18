// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const AvailableLanguages = [
  'en'
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Dictionary>
) {
  const lang = (req.query.lang ?? 'en') as string

  if (AvailableLanguages.includes(lang)) {
    res.redirect(`/${lang}.json`)
  } else {
    res.status(404)
  }
}
