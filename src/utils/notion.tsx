import { Client } from '@notionhq/client';

const notionAPI = new Client({
  auth: process.env.NOTION_API_KEY,
});

export { notionAPI };
