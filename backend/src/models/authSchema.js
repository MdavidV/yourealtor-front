import {z} from 'zod';

export const registerSchema = z.object({
    firstName: z.string({
        required_error: 'Name is required'
    }), 
    secondName: z.string({
        required_error: 'Second Name is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: "Invalid email"
    }), 
    password: z.string({
        required_error: 'Password is required'
    }).min(8, {
        message: 'Password must be at least 8 characters'
    })
}); 

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: 'Invalid email'
    }), 
    password: z.string({
        required_error: 'Password is required'
    }).min(8, {
        message: 'Password must be at least 8 characters'
    })
});