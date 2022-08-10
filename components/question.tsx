type QuestionProps = {
    question: string,
    answer: JSX.Element,
    questionId: string,
    accordionId: string
}

export default function Question({ question, answer, questionId, accordionId }: QuestionProps) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + questionId}>
                    {question}
                </button>
            </h2>
            <div id={questionId} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent={"#" + accordionId}>
                <div className="accordion-body">
                    {answer}
                </div>
            </div>
        </div>
    )
}