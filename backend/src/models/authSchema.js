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

export const newPasswordSchema = z.object({
    newPassword: z.string({
        required_error: "Password is required"
    }).min(8, {
        message: 'Password must be at least 8 characters'
    })
})

export const asesorSchema = z.object({
    firstName: z.string().trim().min(1, { message: "First name is required" }),
    secondName: z.string().trim().min(1, { message: "Second name is required" }),
    phone: z.string({ required_error: "Phone is required" }),
    availability: z.enum(['Disponible', 'Inactivo']).default('Disponible'), // Cambiado a 'availability' para la disponibilidad del asesor
    code: z.string({ required_error: "Code is required" }),
    email: z.string().email({ message: "Invalid email format" }).trim(),
    password: z.string().min(1, { message: "Password is required" }),
    status: z.enum(['Verified', 'Unverified']).default('Unverified'), // 'status' se mantiene para el estado de la cuenta
    role: z.literal('Asesor').default('Asesor'),
  }).strict();