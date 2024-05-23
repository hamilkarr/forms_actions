"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);

  return (
    <main className="mx-auto w-80 mt-20">
      <header className="text-center text-4xl">🔥</header>
      <form action={action} className="flex flex-col gap-7 items-center mt-8 relative">
        <Input type="email" name="email" placeholder="✉️ Email" required={true} errors={[]} />
        <Input type="text" name="username" placeholder="Username" required={true} errors={[]} />
        <Input type="password" name="password" placeholder="Password" required={true} errors={state?.errors ?? []} />
        <Button text="Log in" />
        <div className={`${state?.result ? '' : 'hidden'} bg-green-500 w-full py-3 px-4 rounded-xl flex items-center gap-2 -mt-5`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-5"><path d="M16.5163 8.93451L11.0597 14.7023L8.0959 11.8984" stroke="#000000" stroke-width="2"/><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="2"/></svg> Welcome back!</div>
      </form>
    </main>
  );
}
