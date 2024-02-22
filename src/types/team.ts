import type { IImage } from '@/types/common';

export interface ITeam {
  id: number;
  name: string;
  position: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  photo: IImage;
  isStatic?: false;
}
