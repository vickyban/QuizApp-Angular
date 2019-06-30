import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { AppStatus } from 'src/models/AppStatus';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  quiz: Quiz;
  status = AppStatus.None;
  statusEnum: typeof AppStatus = AppStatus;
  questionSize: number;
  count: number = 1;

  constructor() { }

  ngOnInit() {
  }

  onCreate(event) {
    event.preventDefault();
    let author = event.target.querySelector("#author").value;
    let quizName = event.target.querySelector("#quiz").value;
    this.questionSize = parseInt(event.target.querySelector("#questionSize").value);
    this.quiz = new Quiz(author, quizName, [], this.questionSize);
    this.status = AppStatus.CreatingQuiz;
    console.log(this.quiz);
  }

  onNewQuestion(question) {
    console.log("Add new question ", question);
    this.quiz.questions.push(question);
    this.count++;
    if (this.count > this.questionSize) {
      this.status = AppStatus.CreatedQuiz;
    }

  }

  onSaveQuiz(event) {
    let file = new Blob([JSON.stringify(this.quiz)], { type: 'application/json' })
    saveAs(file, 'helloworld.json');
  }
}
