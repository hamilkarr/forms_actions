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
    return (
        <div className="flex flex-col w-full">
            <input
                className=" py-2 px-3 rounded-full ring-2 ring-gray-300 ring-offset-2 focus:outline-none focus:border focus:border-gray-300"
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
