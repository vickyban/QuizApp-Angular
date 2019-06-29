import { Component, OnInit } from '@angular/core';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})
export class QuizInfoComponent implements OnInit {

  private author: string;
  private quizName: string;
  private questionLength: number;
  private questions: Question[];

  constructor() { }

  ngOnInit() {
  }

}
