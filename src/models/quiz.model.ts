import { Question } from './question.model';

export class Quiz {
  constructor(
    public author?: string,
    public quizName?: string,
    public questions?: Question[],
    public questionSize?: number
  ) { }
}