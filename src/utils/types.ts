export interface FootballData {
  address?: string;
}

export interface CVData {
  fullName: string;
  position: string;
  gitHubUrl: string;
  linkedInUrl: string;
  skills: string[];
  jobExperience: JobExperienceData[];
}

export interface JobExperienceData {
  companyName: string;
  beginDate: string;
  endDate?: string;
  jobTitle: string;
  duties: string[];
}
