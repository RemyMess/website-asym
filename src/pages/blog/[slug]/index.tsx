import type { IArticle, IAuthor } from '@/types/article';
import { Storyblok } from '@/utils/api';
import Seo from '@/components/seo';
import React from 'react';

import Article from '@/modules/blog/article';

interface IArticlePage {
  data: IArticle;
  relAuthor: IAuthor;
}

const ArticlePage = ({ data, relAuthor }: IArticlePage) => {
  const JSONLD = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.content.title,
    image: data.content.image.filename,
    // genre: data.category.category,
    // keywords: 'seo sales b2b',
    publisher: 'Inferex',
    url: `http://www.inferex.com/blog/${data.slug}`,
    datePublished: data.published_at,
    dateCreated: data.first_published_at,
    dateModified: data.published_at,
    description: data.content.description,
    articleBody: data.content,
    author: {
      '@type': 'Person',
      name: relAuthor.content.name,
    },
  };

  return (
    <>
      <Seo title={data.content.title} JSONLD={JSONLD} />
      <Article data={data} author={relAuthor} />
    </>
  );
};

export default ArticlePage;

export async function getServerSideProps(context: {
  preview: boolean;
  params: { slug: string };
}) {
  try {
    const { slug } = context.params;
    const data = await Storyblok.get(`cdn/stories/blog/${slug}`, {
      version: context?.preview ? 'draft' : 'published',
      resolve_relations: 'author',
    });

    return {
      props: {
        data: data.data.story,
        relAuthor: data.data.rels[0],
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
