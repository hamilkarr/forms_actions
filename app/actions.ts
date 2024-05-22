'use server';

export async function handleForm(prevState: any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Running in the server');
    console.log(
        formData.get('email'),
        formData.get('username'),
        formData.get('password')
    );
    return {
        errors: ['wrong password'],
    };
}
