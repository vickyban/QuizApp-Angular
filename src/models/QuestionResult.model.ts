import { Question } from './question.model';

export class QuestionResult {

  constructor(public question?: Question, public selectedAnswer?: string, public correct?: boolean) { }

}