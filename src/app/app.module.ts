import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TakeQuizComponent } from './components/take-quiz/take-quiz.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { QuizInfoComponent } from './components/quiz-info/quiz-info.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { DisplayQuestionComponent } from './components/display-question/display-question.component';
import { TakeQuestionComponent } from './components/take-question/take-question.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    CreateQuizComponent,
    TakeQuizComponent,
    QuizInfoComponent,
    DisplayQuestionComponent,
    TakeQuestionComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'new',
        component: CreateQuizComponent
      },
      {
        path: 'take',
        component: TakeQuizComponent
      },
      {
        path: '',
        component: QuizInfoComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
