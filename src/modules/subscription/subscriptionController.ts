import errorHandler from "../../helpers/errorHandler";
import responseHandler from "../../helpers/responseHandler";
import logger from "../../utils/logger";
import subscriptionService from "./subscriptionService";

class subcriptionController {
  static async getSubscriptionTypes(req, res) {
    logger.info(`Getting all subscription types`);
    try {
      const subTypes = await subscriptionService.getSubscriptionTypes();
      return responseHandler(res, 200, subTypes);
    } catch (error) {
      console.log(error);
      logger.warn(`Error getting all subscription types`);
      return errorHandler(res, 500, error.message);
    }
  }
  static async createSubType(req, res) {
    logger.info(`Creating subscription type`);
    try {
      const { name, price, type, validity } = req.body;
      const data = {
        name,
        price,
        type,
        validity,
      };
      const subType = await subscriptionService.createSubscriptionType(data);
      return responseHandler(res, 201, subType);
    } catch (error) {
      logger.warn(`Error creating subscription type`);
      return errorHandler(res, 500, error.message);
    }
  }

  static async createUserSubscription(req, res) {
    logger.info(`Creating user subscription`);
    try {
      const { subscription, validity } = req.body;
      const data = {
        user: req.user.id,
        subscription,
        validity,
      };
      const userSub = await subscriptionService.createUserSubsciption(data);
      logger.info("User subscription created successfully");
      return responseHandler(res, 201, userSub);
    } catch (error) {
      logger.warn(`Error creating user subscription`);
      return errorHandler(res, 500, error.message);
    }
  }
}
export default subcriptionController;
