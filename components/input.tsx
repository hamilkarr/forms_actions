interface InputProps {
    type: string;
    placeholder: string;
    required: boolean;
    errors: string[];
    name: string;
}

export default function Input({
    type,
    placeholder,
    required,
    errors,
    name,
}: InputProps) {
    function isRedRing(type: string, errors: string[]) {
        if (errors.length > 0 && type === 'password') {
            return 'ring-red-500';
        }
        return 'ring-gray-300';
    }
    function isRedBorder(type: string, errors: string[]) {
        if (errors.length > 0 && type === 'password') {
            return 'border-red-500';
        }
        return 'border-gray-300';
    }
    return (
        <div className="flex flex-col w-full gap-4">
            <input
                className={`py-2 px-3 rounded-full ring-2 ${isRedRing(type, errors)} ring-offset-2 focus:outline-none focus:border ${isRedBorder(type, errors)} transition-colors`}
                type={type}
                placeholder={placeholder}
                required={required}
                name={name}
            />
            {errors.map((error, index) => (
                <span key={index} className="text-red-500">
                    {error}
                </span>
            ))}
        </div>
    );
}
