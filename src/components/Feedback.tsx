export interface FeedbackProps {
  isAnswerCorrect: boolean;
}

export default function Feedback({ isAnswerCorrect }: FeedbackProps) {
  return (
    <section className="feedback">
      <h2>{isAnswerCorrect ? "Correct" : "Wrong"}</h2>
    </section>
  );
}
