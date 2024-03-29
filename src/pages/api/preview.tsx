/* eslint-disable consistent-return */
import type { NextApiRequest, NextApiResponse } from 'next';
import { Storyblok } from '@/utils/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.STORYBLOCK_SECRET_PREVIEW_TOKEN ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  // const post = await getPostBySlug(req.query.slug);
  const { data } = await Storyblok.get(`cdn/stories/${req.query.slug}`, {
    version: 'draft',
    resolve_relations: 'authors.author',
  });

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!data.story) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect(`/blog/${data.story.slug}`);
};

export default handler;
