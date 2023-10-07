import React, { HTMLAttributes, ReactNode } from "react";

interface BoxProps {
    children: ReactNode;
    
    className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className='' }) => {
    return (
        <div className={`border rounded p-4 shadow-md ${className}`}>
            {children}
        </div> 
    )
}

export default Box;