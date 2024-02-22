require('dotenv').config();

const fs = require('fs');
const { Feed } = require('feed');
const axios = require('axios');

const getAllPosts = async () => {
  const posts = await axios.get(
    `${process.env.NEXT_PUBLIC_CMS_URL}/posts?_sort=created_at:DESC&_limit=4`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_APP_CMS_TOKEN}`,
      },
    }
  );
  return posts.data;
};

const generateRssFeed = async () => {
  const posts = await getAllPosts();

  const siteURL = 'https://inferex.com';
  const date = new Date();

  const feed = new Feed({
    title: 'Inferex blog',
    description: 'Hey! This is our blog RSS feed',
    id: siteURL,
    link: siteURL,
    language: 'en',
    image: `${siteURL}/logo.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Inferex`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteURL}/rss.xml`,
      json: `${siteURL}/feed.json`,
      atom: `${siteURL}/atom.xml`,
    },
    author: {
      name: 'Inferex Limited',
      email: 'greg@inferex.com',
      link: 'https://inferex.com',
    },
  });

  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.url}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.content,
      author: post.authors.map((author) => ({ name: author?.name })),
      date: new Date(post.created_at),
    });
  });

  feed.items.sort((a, b) => b.date - a.date);

  fs.writeFileSync('./public/rss.xml', feed.rss2());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
  fs.writeFileSync('./public/feed.json', feed.json1());
};

generateRssFeed();
