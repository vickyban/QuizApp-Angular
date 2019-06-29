import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  quiz: Quiz;
  createMode = false;

  constructor() { }

  ngOnInit() {
  }

  onCreate(event) {
    event.preventDefault();
    let author = event.target.querySelector("#author").value;
    let quizName = event.target.querySelector("#quiz").value;
    this.quiz = new Quiz(author, quizName);
    this.createMode = true;
  }
}
