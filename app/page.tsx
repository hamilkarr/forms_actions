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
      </form>
    </main>
  );
}
