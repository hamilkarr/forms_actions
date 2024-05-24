'use server';
import { z } from 'zod';

const checkEmail = (email: string) => {
    return email.includes('@zod.com');
};

const formSchema = z.object({
    email: z.string().trim().email().refine(checkEmail, {
        message: 'only @zod.com emails are allowed',
    }),
    username: z
        .string()
        .trim()
        .min(5, 'username must be at least 5 characters long'),
    password: z
        .string()
        .trim()
        .min(10, 'password must be at least 10 characters long')
        .regex(/\d/, 'password must contain at least one number(1234567890)'),
});

export async function handleForm(prevState: any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = {
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password'),
    };

    const result = formSchema.safeParse(data);

    return {
        isLogin: result.success,
        errors: result.success ? undefined : result.error.flatten(),
    };
}
