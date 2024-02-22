import type { IImage } from '@/types/common';

export interface ITestimonial {
  id: number;
  name: string;
  position: string;
  description: string;
  published_at: string;
  created_at: string;
  companyLogo: IImage;
}
