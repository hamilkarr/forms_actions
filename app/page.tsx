'use client';

import Button from '@/components/button';
import Input from '@/components/input';
import { useFormState } from 'react-dom';
import { handleForm } from './actions';

export default function Home() {
    const [state, action] = useFormState(handleForm, null);

    const userNameIcon = (
        <svg
            className="absolute w-6 top-4 left-3 text-gray-400"
            viewBox="0 -8 72 72"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <defs></defs>
                <title>user</title>
                <path d="M12.54,52.05H59.46a2.11,2.11,0,0,0,1.6-.7A1.73,1.73,0,0,0,61.49,50,25.8,25.8,0,0,0,47.9,30.45a16.8,16.8,0,0,1-23.8,0A25.8,25.8,0,0,0,10.51,50a1.75,1.75,0,0,0,.43,1.38A2.11,2.11,0,0,0,12.54,52.05Z"></path>
                <path d="M25.43,28.6c.27.29.56.56.85.82a14.52,14.52,0,0,0,19.43,0,11.1,11.1,0,0,0,.86-.82c.27-.29.54-.58.79-.89a14.6,14.6,0,1,0-22.72,0C24.89,28,25.16,28.31,25.43,28.6Z"></path>
            </g>
        </svg>
    );

    const emailIcon = (
        <svg
            className="absolute w-6 top-4 left-3 text-gray-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
            </g>
        </svg>
    );

    const passwordIcon = (
        <svg
            className="absolute w-5 top-4 left-4 text-gray-400"
            viewBox="0 -0.5 17 17"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="#000000"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {' '}
                <title>990</title> <defs> </defs>{' '}
                <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    {' '}
                    <path
                        d="M15.797,1.272 C14.248,-0.278 11.649,-0.378 10.107,1.165 C8.988,2.282 8.79,3.999 9.295,5.398 L1.072,13.621 C1.072,13.621 0.538,16.448 2.922,15.836 C2.98,15.76 3.969,15.25 3.969,15.25 L3.992,12.961 L6.215,13 L6.955,12.125 L6.969,9.953 L8.946,9.953 L8.944,7.978 L11.112,7.97 L11.491,7.712 C12.93,8.314 14.688,7.874 15.812,6.869 C17.438,5.416 17.347,2.821 15.797,1.272 L15.797,1.272 Z M15.016,3.031 L13.969,3.031 L13.969,1.984 L15.016,1.984 L15.016,3.031 L15.016,3.031 Z"
                        fill="currentColor"
                    >
                        {' '}
                    </path>{' '}
                </g>{' '}
            </g>
        </svg>
    );

    return (
        <main className="mx-auto mt-20 ">
            <header className="text-center text-4xl">🔥</header>
            <form
                action={action}
                className="max-w-[400px] grid grid-cols-1 gap-7 mt-8 mx-auto"
            >
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required={true}
                    errors={state?.errors?.fieldErrors?.email}
                    icon={emailIcon}
                />
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required={true}
                    minLength={5}
                    errors={state?.errors?.fieldErrors.username}
                    icon={userNameIcon}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    minLength={10}
                    errors={state?.errors?.fieldErrors.password}
                    icon={passwordIcon}
                />
                <Button text="Log in" />
                {state?.isLogin ? (
                  <div
                      className={` bg-green-500 w-full py-3 px-4 rounded-xl flex items-center gap-2 -mt-5`}
                  >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-5"
                      >
                          <path
                              d="M16.5163 8.93451L11.0597 14.7023L8.0959 11.8984"
                              stroke="#000000"
                              strokeWidth="2"
                          />
                          <path
                              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                              stroke="#000000"
                              strokeWidth="2"
                          />
                      </svg>
                      Welcome back!
                  </div>
                ) : null}
            </form>
        </main>
    );
}
