import { PropsWithChildren } from "react";

export default function ErrorLayout({ children }: PropsWithChildren) {
    return (
        <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}