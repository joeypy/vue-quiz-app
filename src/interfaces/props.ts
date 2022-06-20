export interface Questions {
  questions: Question[];
  results: Result[];
}

interface Result {
  min: number;
  max: number;
  title: string;
  desc: string;
}

interface Question {
  q: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  is_correct: boolean;
}
