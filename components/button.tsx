"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function Button({text}: ButtonProps){
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="bg-gray-200 w-full font-bold text-sm py-3 rounded-full hover:bg-slate-300 transition-colors disabled:text-slate-500 disabled:cursor-not-allowed" type="submit">{pending ? "Loading..." : text}</button>
  )
}