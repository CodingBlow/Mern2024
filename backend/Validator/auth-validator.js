const { z } = require("zod");

const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(50, "Username must be less than 50 characters long"),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .max(10, "Phone number must be at least 10 digits long")
    .min(10,"Phone number must be at least 10 digits long")
    .regex(/^\d+$/, "Phone number must contain only numbers"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(6, "Password must be at least 6 characters long"),
});

const LoginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(6, "Password must be at least 6 characters long"),
});

module.exports = { registerSchema, LoginSchema };
