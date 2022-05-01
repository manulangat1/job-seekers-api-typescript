import { Company } from "../../database/models/Company";

import { AppDataSource } from "../../database";
import { AppliedJobsType, companyType, JobType } from "./types";
import { Jobs } from "../../database/models/Jobs";
import { AppliedJobs } from "../../database/models/AppliedJobs";
import { join } from "path";

class jobDbRepo {
  static async getAllCompanies() {
    const companies = await AppDataSource.getRepository(Company).find();
    return companies;
  }
  static async createCompany(data: companyType) {
    const company = new Company();
    company.name = data.name;
    company.email = data.email;
    company.website = data.website;
    await AppDataSource.manager.save(company);
    return company;
  }
  static async createJob(data: JobType) {
    const job = new Jobs();
    job.title = data.title;
    job.link = data.link;
    job.description = data.description;
    job.active = data.active;
    job.datePosted = data.datePosted;
    job.createdAt = data.createdAt;
    job.company = data.company;
    await AppDataSource.manager.save(job);
    return job;
  }
  static async getAllJobs() {
    const jobs = await AppDataSource.getRepository(Jobs).find();
    return jobs;
  }

  static async applyJob(data: AppliedJobsType) {
    const job = new AppliedJobs();
    job.user = data.user;
    job.jobs = data.jobs;
    await AppDataSource.manager.save(job);
    return job;
  }
  static async getAllAppliedJobs(id: any) {
    const jobs = await AppDataSource.getRepository(AppliedJobs).find({
      where: { user: id },
    });
    return jobs;
  }
}

export default jobDbRepo;
