import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-take-question',
  templateUrl: './take-question.component.html',
  styleUrls: ['./take-question.component.css']
})
export class TakeQuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
