import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SuggestedQuestionsProps = {
  questions: string[];
  onSelect: (question: string) => void;
  className?: string;
};

export function SuggestedQuestions({
  questions,
  onSelect,
  className,
}: SuggestedQuestionsProps) {
  if (questions.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {questions.map((question, index) => (
        <Button
          key={index}
          type="button"
          variant="outline"
          size="sm"
          onClick={() => onSelect(question)}
          className="text-left"
        >
          {question}
        </Button>
      ))}
    </div>
  );
}
