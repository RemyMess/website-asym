import StoryblokClient from 'storyblok-js-client';
interface IAddIdtoUrlProps {
  url: string;
  id: string;
  toBeChanged: string;
}

export const addIdtoUrl = ({
  url,
  id,
  toBeChanged = ':id',
}: IAddIdtoUrlProps) => url.replace(toBeChanged, id);

export const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOCK_ACCESS_TOKEN,
});
