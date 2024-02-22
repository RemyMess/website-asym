/* eslint-disable no-use-before-define */

export interface IJobs {
  id: number;
  name: string;
  salary_start: null;
  salary_end: null;
  about_the_role: null;
  responsibilities: null;
  requirements: null;
  nice_to_have: null;
  form_url: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  workload: string;
  role_description: null;
  role: null;
  level: string;
  category: IJobCategory;
  is_active: boolean;
  description: string;
  salary: string;
  location: string;
  icon: null;
  url: string;
  levels: IJobLevel[];
}

export interface IJobCategory {
  id: number;
  category: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  level?: string;
}

export interface IJobLevel {
  id: number;
  category?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  level?: string;
}
