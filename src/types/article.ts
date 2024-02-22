/* eslint-disable no-use-before-define */
// import type { Description } from '@slack/web-api/dist/response/ChatPostMessageResponse';

export interface IArticle {
  name: string;
  created_at: string;
  published_at: string;
  id: number;
  uuid: string;
  content: IArticleContent;
  slug: string;
  full_slug: string;
  sort_by_date: null;
  position: number;
  tag_list: any[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: null;
  group_id: string;
  first_published_at: string;
  release_id: null;
  lang: string;
  path: null;
  alternates: any[];
  default_full_slug: null;
  translated_slugs: null;
}

export interface IArticleContent {
  _uid: string;
  image: Image;
  title: string;
  author: string;
  content: IContent;
  component: string;
  description: any;
  _editable: string;
}

export interface IContent {
  type: string;
  content: IContentInner[];
}

export interface IContentInner {
  type: string;
  content?: {
    text?: string;
    attrs?: {
      alt: string;
      src: string;
      title: string;
      copyright: string;
    };
    content?: {
      content?: {
        text: string;
      }[];
      text?: string;
    }[];
  }[];
  attrs?: {
    level?: number;
    class?: string;
    order?: number;
  };
}

export interface Image {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  is_external_url: boolean;
}

export interface IAuthor {
  name: string;
  created_at: string;
  published_at: string;
  id: number;
  uuid: string;
  content: {
    _uid: string;
    name: string;
    position: string;
    image: any;
    component: string;
    _editable: string;
  };
  slug: string;
  full_slug: string;
  sort_by_date: null;
  position: number;
  tag_list: any[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: null;
  group_id: string;
  first_published_at: string;
  release_id: null;
  lang: string;
  path: null;
  alternates: any[];
  default_full_slug: null;
  translated_slugs: null;
}
