import { Control } from "react-hook-form"
import { ContactForm } from "./ContactMeForm";

type InputProps = {
    control: Control<ContactForm>;
    name: string;
    type: "text" | "email" | "password" | "textarea" | "number";
    placeholder: string;
    error?: string
}

export default function Input({
    control,
    name,
    placeholder,
    type,
    error
}: InputProps): JSX.Element {

    return (
        <div className="mb-6 ">
            <label htmlFor={name} className="block text-sm font-medium text-gray-900 dark:text-gray-300">{name}</label>
            <input
                type={type}
                name={name}
                required
                id={name}
                className={`w-full mt-2 px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-700 ${type === "textarea" ? "resize-y h-32" : ""}`}
                placeholder={placeholder}
                {...control.register(name.toLowerCase() as keyof ContactForm)}
            />
        </div>
    )
}