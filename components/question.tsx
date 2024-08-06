'use client'

import { useRef } from 'react'

type QuestionProps = {
    question: string,
    answer: JSX.Element,
    accordionId: string
}

export default function Question({ question, answer, accordionId }: QuestionProps) {
    const collapseRef = useRef<HTMLDivElement>(null)

    const toggleQuestion = async () => {
        if (!collapseRef.current)
            return

        const collapse = (await import('bootstrap/js/dist/collapse')).default
        const collapseElement = collapse.getOrCreateInstance(collapseRef.current)
        collapseElement.toggle()
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button onClick={toggleQuestion} className="accordion-button collapsed" type="button">
                    {question}
                </button>
            </h2>
            <div ref={collapseRef} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent={"#" + accordionId}>
                <div className="accordion-body">
                    {answer}
                </div>
            </div>
        </div>
    )
}