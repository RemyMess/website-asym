import { notionAPI } from '@/utils/notion';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendSlackMessage } from '@/services/slack';
import Cors from 'cors';

import rateLimit from '@/utils/rate-limiter';

const whiteList = [
  'https://inferex.com',
  'http://localhost:3000',
  'https://inferex-preview.vercel.app',
];

const cors = Cors({
  methods: ['POST'],
  origin: (origin, callback) => {
    const or = origin as string;
    if (whiteList.indexOf(or) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
});

const limiter = rateLimit({
  interval: 60 * 1000 * 10, // 10 min
  uniqueTokenPerInterval: 100, // Max 200 users per second
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);
  try {
    await limiter.check(res, 5, 'CACHE_TOKEN');
  } catch (error) {
    res.status(429).json({ erros: 'Rate limit exceeded' });
  }

  const { email } = req.body;

  try {
    await notionAPI.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID as string,
        type: 'database_id',
      },
      properties: {
        email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
      },
    });

    await sendSlackMessage({
      message: `New user signed up! 📫 - ${email}`,
      conversationId: process.env.NEXT_SLACK_BOT_CHANNEL_ID as string,
    });

    res.status(201).send('OK');
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
}
