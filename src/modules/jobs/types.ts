export interface companyType {
  id?: number;
  name: string;
  email: string;
  website: string;
}

export interface JobType {
  id?: number;
  title: string;
  link: string;
  description: string;
  active: boolean;
  datePosted?: Date;
  createdAt?: Date;
  company: any;
}

export interface AppliedJobsType {
  id?: number;
  user: any;
  jobs: any;
}
