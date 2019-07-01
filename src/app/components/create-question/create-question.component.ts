import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  private _questionNo: number;
  @Input() set questionNo(value: number) {
    this._questionNo = value;
    let radioBtn: any = document.querySelector("input[type='radio']:checked")
    if (radioBtn != null)
      radioBtn.checked = false;
  }
  @Output() newQuestion: EventEmitter<Question> = new EventEmitter();

  answer: string

  constructor() { }

  ngOnInit() {
  }

  onSelect(choice) {
    this.answer = choice;
    console.log({ answer: this.answer })
  }

  onAddQuestion(event) {
    event.preventDefault();
    let form = event.target;
    let questionType = form.querySelector("#question").value;
    let answers = [
      form.querySelector("#c1").value,
      form.querySelector("#c2").value,
      form.querySelector("#c3").value,
      form.querySelector("#c4").value
    ]
    if (this.isValid(questionType, ...answers)) {
      let question = new Question(questionType, answers, this.answer);
      this.newQuestion.emit(question);
      form.querySelector("#question").value = '';
      form.querySelector("#c1").value = '';
      form.querySelector("#c2").value = '';
      form.querySelector("#c3").value = '';
      form.querySelector("#c4").value = '';
    }
    else {

    }

  }

  isValid(...values) {
    for (let v of values) {
      if (v == null || v === '')
        return false;
    }
    return true;
  }
}
