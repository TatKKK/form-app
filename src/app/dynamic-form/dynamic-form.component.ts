import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/QuestionBase';
import { QuestionControlService } from '../question-control.service';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';
  constructor(private qcs: QuestionControlService) {}
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
