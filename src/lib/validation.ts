// validationSchemas.js
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const RegisterSchema = z.object({
  name: z.string().min(4).max(50),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});
