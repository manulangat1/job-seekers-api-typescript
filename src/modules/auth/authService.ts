import { userType } from "./types";
import { User } from "../../database/models";
import authDbRepo from "./dbRepository";
class authService {
  static async createUser(data: userType) {
    try {
      const user = await authDbRepo.createUser(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async getUser(email: string) {
    try {
      const user = await authDbRepo.findUserByEmail(email);
      return user;
    } catch (error) {
      console.log(error);
      //   throw error;
    }
  }
}
export default authService;
