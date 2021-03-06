import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { AppStatus } from 'src/models/AppStatus';
import { Question } from 'src/models/question.model';
import { QuestionResult } from 'src/models/QuestionResult.model';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

  quiz: Quiz;
  enumStatus: typeof AppStatus = AppStatus;
  status = AppStatus.UploadQuiz;
  questionIndex = 0;
  curQuestion: Question;
  userResult: QuestionResult[] = [];

  constructor() { }

  ngOnInit() {
  }

  onUpload(event) {
    let target = event.target;
    let reader = new FileReader();
    reader.onload = (e: any) => {
      let content = e.target.result;
      this.quiz = JSON.parse(content);
      this.status = AppStatus.UploadedQuiz;
      console.log(this.quiz);
    }
    reader.readAsText(target.files[0])
  }

  onStartQuiz(event) {
    this.status = AppStatus.TakingQuiz;
    this.curQuestion = this.quiz.questions[this.questionIndex];
  }

  onNextQuestion(result) {
    this.userResult.push(result);
    this.questionIndex++;
    if (this.questionIndex < this.quiz.questionSize)
      this.curQuestion = this.quiz.questions[this.questionIndex];
    else {
      this.status = AppStatus.CompletedQuiz;
      console.log(this.userResult);
    }
  }
  getClasses(correct) {
    return {
      "div-r-userAns": true,
      "incorrect": !correct
    }
  }
}
