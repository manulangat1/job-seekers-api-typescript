import jobDbRepo from "./jobDbRepo";
import { AppliedJobsType, companyType, JobType } from "./types";

class jobService {
  static async getAllCompanies() {
    const companies = await jobDbRepo.getAllCompanies();
    return companies;
  }
  static async createCompany(data: companyType) {
    const company = await jobDbRepo.createCompany(data);
    return company;
  }
  static async createJob(data: JobType) {
    return await jobDbRepo.createJob(data);
  }

  static async getAllJobs() {
    const jobs = await jobDbRepo.getAllJobs();
    return jobs;
  }
  static async applyJob(data: AppliedJobsType) {
    return await jobDbRepo.applyJob(data);
  }
  static async getAllAppliedJobs(id: any) {
    const jobs = await jobDbRepo.getAllAppliedJobs(id);
    return jobs;
  }
}
export default jobService;
