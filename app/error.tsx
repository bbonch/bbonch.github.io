'use client'

import ErrorLayout from "./error-layout"

export default function Error({
    error
}: {
    error: Error
}) {
    return (
        <ErrorLayout>
            <h1 className="py-5 display-1">{error.message}</h1>
        </ErrorLayout>
    )
}