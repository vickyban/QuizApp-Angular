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
  @Input() questionNo: number;
  message: string = '';
  @Output() toNextQuestion: EventEmitter<QuestionResult> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNextQuestion() {
    let selectedRadio: any = document.querySelector('.answers input[name="answer"]:checked');
    if (selectedRadio != null) {
      let selectedAnswer = selectedRadio.value;
      let result = new QuestionResult(this.question, selectedAnswer);
      result.correct = this.question.answer === selectedAnswer
      this.toNextQuestion.emit(result);
      selectedRadio.checked = false;
    }
  }

}
