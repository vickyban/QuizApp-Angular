import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';
import { QuestionResult } from 'src/models/QuestionResult.model';

@Component({
  selector: 'app-take-question',
  templateUrl: './take-question.component.html',
  styleUrls: ['./take-question.component.css']
})
export class TakeQuestionComponent implements OnInit {

  @Input() question: Question;
  message: string = '';
  @Output() toNextQuestion: EventEmitter<QuestionResult> = new EventEmitter();
  result: QuestionResult;

  constructor() { }

  ngOnInit() {
  }

  onSubmitAnswer() {
    let selectedRadio: any = document.querySelector('.answers input[name="answer"]:checked');
    let selectedAnswer = selectedRadio.value;
    this.result = new QuestionResult(this.question, selectedAnswer);
    if (this.question.answer === selectedAnswer) {
      this.message = "correct answer" + this.question.answer;
      this.result.correct = true;
    } else {
      this.message = "Correct question is " + this.question.answer;
      this.result.correct = false;
    }
  }

  onNextQuestion() {
    this.toNextQuestion.emit(this.result);
  }

}
