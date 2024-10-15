import { Request, Response, NextFunction } from "express";
import { hash } from "bcryptjs";
import { UserRepository } from "../repositories";
import { UserUpdate, UserCreate } from "../DTOs";

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = UserCreate.parse(req.body);
      const userExists = await UserRepository.findByEmail(user.email);

      if (userExists) {
        return next({
          status: 400,
          message: "An account with this email is already registered",
        });
      }

      const userData = { ...user, password: await hash(user.password, 8) };

      const insertUser = await UserRepository.create(userData);

      res.locals = {
        status: 201,
        message: "User created",
        data: insertUser,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const user = await UserRepository.findById(userId);

      if (!user) {
        return next({
          status: 404,
          message: "User not found",
        });
      }

      res.locals = {
        status: 200,
        data: user,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async list(_: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserRepository.list();

      res.locals = {
        status: 200,
        data: users,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const user = UserUpdate.parse(req.body);

      const updateUser = await UserRepository.update(userId, user);

      res.locals = {
        status: 200,
        data: updateUser,
        message: "User updated",
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      await UserRepository.delete(userId);

      res.locals = {
        status: 200,
        message: "User deleted",
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new UserController();
