import * as z from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Please enter a valid email address" })
      .min(1, { message: "Email is required" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[a-zA-Z]/, { message: "Password must contain letters" })
      .regex(/[0-9]/, { message: "Password must contain numbers" }),

    cpassword: z
      .string()
      .min(8, {
        message: "Password confirmation must be at least 8 characters",
      })
      .regex(/[a-zA-Z]/, {
        message: "Password confirmation must contain letters",
      })
      .regex(/[0-9]/, {
        message: "Password confirmation must contain numbers",
      }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"],
  });

export const userLoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
  password: z.string({ message: "password is required" }),
});
