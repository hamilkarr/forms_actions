import { InputHTMLAttributes } from 'react';

interface InputProps {
    errors?: string[];
    name: string;
    icon?: React.ReactNode;
}

export default function Input({
    errors = [],
    name,
    icon,
    ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
    function isRedRing(errors: string[]) {
        if (errors.length > 0) {
            return 'ring-red-400';
        }
        return 'ring-gray-300';
    }
    function isRedBorder(errors: string[]) {
        if (errors.length > 0) {
            return 'border-red-400';
        }
        return 'border-gray-300';
    }
    return (
        <div className="flex flex-col min-w-max gap-4 relative">
            {icon && icon}
            <input
                className={`${
                    icon ? 'pl-11 pr-4' : 'px-5'
                } py-4 rounded-full ring-2 ${isRedRing(
                    errors
                )} ring-offset-2 focus:outline-none focus:border ${isRedBorder(
                    errors
                )} transition-colors`}
                name={name}
                {...rest}
            />
            {errors.map((error, index) => (
                <span key={index} className="text-red-400">
                    {error}
                </span>
            ))}
        </div>
    );
}
