import { DataSource, getRepository } from "typeorm";
import { AppDataSource } from "../../database";
import { User } from "../../database/models/User";
import { userType } from "./types";

class authDbRepo {
  static async createUser(data: userType) {
    try {
      const user = new User();
      user.username = data.username;
      user.email = data.email;
      user.password = data.password;
      user.phone = data.phone;
      user.address = data.address;
      await AppDataSource.manager.save(user);
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async findUserByEmail(email: string) {
    try {
      const user = await AppDataSource.getRepository(User).findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
export default authDbRepo;
