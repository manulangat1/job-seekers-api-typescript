import dbRepo from "./dbRepo";
import { subscription, subscriptionType } from "./types";

class subscriptionService {
  static async getSubscriptionTypes() {
    try {
      const subscriptionTypes = await dbRepo.getAllSubscriptionTypes();
      return subscriptionTypes;
    } catch (error) {
      throw error;
    }
  }

  static async createSubscriptionType(data: subscriptionType) {
    const subType = await dbRepo.createSubscriptionType(data);
    return subType;
  }
  static async createUserSubsciption(data: subscription) {
    const userSubscription = await dbRepo.createUserSubscription(data);
    return userSubscription;
  }
}
export default subscriptionService;
