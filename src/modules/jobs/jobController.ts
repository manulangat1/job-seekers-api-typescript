import responseHandler from "../../helpers/responseHandler";
import errorHandler from "../../helpers/errorHandler";

import logger from "../../utils/logger";
import jobService from "./jobService";

class jobController {
  static async getCompanies(req, res) {
    logger.info(`Getting all companies`);
    try {
      const companies = await jobService.getAllCompanies();
      return responseHandler(res, 200, companies);
    } catch (error) {
      console.log(error);
      logger.warn(`Error getting all companies`);
      return errorHandler(res, 500, error.message);
    }
  }
  static async createCompany(req, res) {
    logger.info(`Creating company`);
    try {
      const { name, email, phone, address, website } = req.body;
      const data = {
        name,
        email,
        phone,
        address,
        website,
      };
      const company = await jobService.createCompany(data);
      return responseHandler(res, 201, company);
    } catch (error) {
      logger.warn(`Error creating company`);
      return errorHandler(res, 500, error.message);
    }
  }

  static async createJob(req, res) {
    logger.info(`Creating job`);
    try {
      const { title, link, description, active, datePosted, company } =
        req.body;
      const data = {
        title,
        link,
        description,
        active,
        datePosted,
        company,
      };
      const job = await jobService.createJob(data);
      console.log(job);
      return responseHandler(res, 201, job);
    } catch (error) {
      logger.warn(`Error creating job`);
      return errorHandler(res, 500, error.message);
    }
  }

  static async getAllJobs(req, res) {
    logger.info(`Getting all jobs`);
    try {
      const jobs = await jobService.getAllJobs();
      return responseHandler(res, 200, jobs);
    } catch (error) {
      logger.warn(`Error getting all jobs`);
      return errorHandler(res, 500, error.message);
    }
  }

  static async applyJob(req, res) {
    logger.info(`Applying job`);
    try {
      const { job } = req.body;
      console.log(req.user);
      const data = {
        user: req.user.id,
        jobs: job,
      };
      const appliedJob = await jobService.applyJob(data);
      logger.info(`Job applied successfully`);
      return responseHandler(res, 201, appliedJob);
    } catch (error) {
      logger.warn(`Error applying job`);
      return errorHandler(res, 500, error.message);
    }
  }
  static async getAllAppliedJobs(req, res) {
    logger.info(`Getting all applied jobs`);
    try {
      const jobs = await jobService.getAllAppliedJobs(req.user.id);
      return responseHandler(res, 200, jobs);
    } catch (error) {
      logger.warn(`Error getting all applied jobs`);
      return errorHandler(res, 500, error.message);
    }
  }
}
export default jobController;
