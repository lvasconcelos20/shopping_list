import { z } from "zod";

export const User = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be a string",
      required_error: "Name is required",
    })
    .regex(/^[a-zA-Z\s]*$/, { message: "Name must contain only letters" }),
  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "Email is required",
    })
    .email({ message: "Email must be a valid email" }),
  password: z
    .string({
      invalid_type_error: "Password must be a string",
      required_error: "Password is required",
    })
    .min(8, { message: "Password must be at least 8 characters long" }),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UserCreate = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be a string",
      required_error: "Name is required",
    })
    .regex(/^[a-zA-Z\s]*$/, { message: "Name must contain only letters" }),
  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "Email is required",
    })
    .email({ message: "Email must be a valid email" }),
  password: z
    .string({
      invalid_type_error: "Password must be a string",
      required_error: "Password is required",
    })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const UserUpdate = User.partial();
