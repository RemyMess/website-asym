/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import dynamic from 'next/dynamic';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';
import { Storyblok } from '@/utils/api';
import Image from 'next/image';
import BackgroundImage from '@/assets/images/ornament.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import LinkIcon from '@/assets/icons/link.svg';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import type { IArticle, IAuthor } from '@/types/article';
import styles from './article.module.scss';

const SyntaxHighLightDynamic = dynamic(
  () => import('react-syntax-highlighter'),
  {
    ssr: false,
  }
);

interface IArticleProps {
  data: IArticle;
  author: IAuthor;
}

const Article = ({ data, author }: IArticleProps) => {
  const { published_at, slug } = data;
  const { content, description, image, title } = data.content;

  const [copiedCode, setCopiedCode] = React.useState(false);

  const { copiedText, copy, cleanup } = useCopyToClipboard();

  const base = 'https://inferex.com';
  const positionUrl = `${base}/blog/${slug}`;

  const twitterLink = `https://twitter.com/intent/tweet?text=${title}&url=${positionUrl}`;

  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${positionUrl}`;

  const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${positionUrl}&title=${title}&summary=${description}&source=${positionUrl}`;

  useEffect(() => {
    if (copiedText) {
      setTimeout(() => {
        cleanup();
        setCopiedCode(false);
      }, 1000);
    }
  }, [copiedText]);

  const date = new Date(published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const parseOptions = {
    replace: (domNode: any) => {
      if (domNode.name === 'pre') {
        const lang =
          domNode.children[0].attribs.class.split('-')[1] || 'python';
        const text = domNode.children[0].children[0].data as string;
        return (
          <div className={styles.codeWrapper}>
            <span
              className={styles.copyWrap}
              onClick={() => {
                copy(text);
                setCopiedCode(true);
              }}
            >
              {copiedCode ? 'Copied!' : 'Copy'}
            </span>
            <SyntaxHighLightDynamic language={lang} style={dracula}>
              {text}
            </SyntaxHighLightDynamic>
          </div>
        );
      }
      // eslint-disable-next-line no-useless-return, consistent-return
      return;
    },
  };

  return (
    <>
      <div className={`containerBig ${styles.outer}`}>
        <img
          className={`basicBackgroundImage ${styles.backgroundImage}`}
          src={BackgroundImage.src}
          alt=""
          role="presentation"
        />
        <div className={styles.inner}>
          <div className={styles.textWrap}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.text}>
              {parse(Storyblok.richTextResolver.render(description))}
            </div>
            <p className={styles.author}>
              {author.content.name}, <br />
              {author.content.position}
            </p>
            <p>{date}</p>
          </div>
          <div className={styles.imageWrap}>
            <Image
              className={styles.image}
              src={image.filename}
              alt={image.alt}
              width="640"
              height="320"
              priority={true}
            />
          </div>
        </div>
        <div className={styles.articleWrap}>
          <div className={styles.content}>
            {parse(Storyblok.richTextResolver.render(content), parseOptions)}
          </div>
          <aside className={styles.sidebar}>
            <p className={styles.sidebarTitle}>Share</p>
            <a target="_blank" href={linkedinLink} rel="noreferrer">
              <img src={LinkedinIcon.src} alt="Linkedin" />
            </a>
            <a target="_blank" href={twitterLink} rel="noreferrer">
              <img src={TwitterIcon.src} alt="Twitter" />
            </a>
            <a target="_blank" href={facebookLink} rel="noreferrer">
              <img src={FacebookIcon.src} alt="Facebook" />
            </a>
            <button
              className={styles.copyButton}
              onClick={() => copy(positionUrl)}
            >
              <img src={LinkIcon.src} alt="" role="presentation" />
            </button>
            <div
              style={{ opacity: copiedText && !copiedCode ? 1 : 0 }}
              className={styles.copyDiv}
            >
              Copied!
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Article;
