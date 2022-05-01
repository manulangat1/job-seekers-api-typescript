import { AppDataSource } from "../../database";
import { Subscription } from "../../database/models/Subscription";
import { UserSubscription } from "../../database/models/UserSubscription";
import errorHandler from "../../helpers/errorHandler";
import { subscription, subscriptionType } from "./types";

class dbRepo {
  static async getAllSubscriptionTypes() {
    try {
      const subscriptionTypes = await AppDataSource.getRepository(
        Subscription
      ).find();
      return subscriptionTypes;
    } catch (error) {
      throw error;
    }
  }
  static async createSubscriptionType(data: subscriptionType) {
    try {
      const subscriptionType = new Subscription();
      subscriptionType.name = data.name;
      subscriptionType.price = data.price;
      subscriptionType.type = data.type;
      subscriptionType.price = data.price;
      subscriptionType.validity = data.validity;
      await AppDataSource.manager.save(subscriptionType);
      return subscriptionType;
    } catch (error) {
      throw error;
    }
  }
  static async createUserSubscription(data: subscription) {
    const userSubscription = new UserSubscription();
    userSubscription.user = data.user;
    userSubscription.subscription = data.subscription;
    userSubscription.validity = data.validity;
    await AppDataSource.manager.save(userSubscription);
    return userSubscription;
  }
}
export default dbRepo;
