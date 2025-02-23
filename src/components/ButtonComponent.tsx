import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Button = (props: {
    variants: "primary" | "secondary" | "text";
    afterIcon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {className, children, variants, afterIcon, ...rest} = props
    return <button className={twMerge(
        "h-11 px-6 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2 transition duration-500 relative group/button",
        variants === "primary" && "bg-red-orange-500 text-white",
        variants === "secondary" && "hover:bg-red-orange-500 hover:text-white",
        variants === "text" && "h-auto px-0 border-transparent after:content-[''] after:h-px after:transition-all after:duration-500 after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full ",
        className
    )} {...rest}>
        <span>{children}</span>
        {afterIcon && <span>
                    {afterIcon}
                </span>}
    </button>
}

export default Button