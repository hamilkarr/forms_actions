'use server';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().email(),
    username: z.string().min(5),
    password: z.string().min(10),
});

export async function handleForm(prevState: any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = {
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password'),
    };

    if (formData.get('password') === '12345') {
        return {
            result: true,
        };
    } else {
        return {
            errors: ['wrong password'],
        };
    }
}
