import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto overflow-hidden min-h-screen flex flex-col">
            {children}
        </div>
    );
}
