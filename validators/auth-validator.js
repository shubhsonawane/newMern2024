const { z } = require("zod");

// Creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(255, { message: "Name must not br more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(255, { message: "Name must not br more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must  bt at least of 10 characters" })
    .max(20, { message: "Phone must not br more than 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must  bt at least of 6 characters" })
    .max(1024, { message: "Password can't br greater than 1024 characters" }),
});

module.exports = signupSchema;
