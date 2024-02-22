/* eslint-disable consistent-return */
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const path = req.query.path as string;

  res.clearPreviewData({ path });

  const cookies = res.getHeader('Set-Cookie') as string[];
  res.setHeader(
    'Set-Cookie',
    cookies.map((cookie: string) =>
      cookie.replace('SameSite=Lax', 'SameSite=None')
    )
  );

  res.redirect('/');
}
