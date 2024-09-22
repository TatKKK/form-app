import { Component } from '@angular/core';
import { QuestionBase } from './models/QuestionBase';
import { Observable } from 'rxjs';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-app';

  questions$: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionsService) {
    this.questions$ = service.getQuestions();
  }
}
