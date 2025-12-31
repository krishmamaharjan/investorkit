import React from "react";

type ButtonProps = {
    text: string;
    primary?: boolean;
    secondary?: boolean;
    onClick?: () => void;
};

export default function Button({
    text,
    primary,
    secondary,
}: ButtonProps) {

    const baseClasses =
        "px-16 py-2 rounded-lg font-semibold ";
    const primaryClasses = "bg-green-900 text-white ";
    const secondaryClasses = "bg-green-600 text-white ";

    const buttonClass = primary
        ? `${baseClasses} ${primaryClasses}`
        : secondary
            ? `${baseClasses} ${secondaryClasses}`
            : `${baseClasses} bg-white text-black border border-gray-300 `;

    return (
        <button className={buttonClass}>
            {text}
        </button>
    );
}
