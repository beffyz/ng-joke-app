import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JokesModel } from '../../../models/JokesModel';

@Component({
  selector: 'app-joke-form-component',
  templateUrl: './joke-form-component.component.html',
  styleUrls: ['./joke-form-component.component.scss'],
})
export class JokeFormComponentComponent implements OnInit {
  @Output() addJokeEvent = new EventEmitter<JokesModel>();

  errorMessage = '';

  jokesForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  buildForm(): void {
    this.jokesForm = this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  addJoke(): void {
    if (!this.jokesForm.valid) {
      this.errorMessage = 'Punchline and answer is required.';
      return;
    } else {
      this.errorMessage = '';
      this.addJokeEvent.emit({
        question: this.jokesForm.value.question,
        answer: this.jokesForm.value.answer,
      });
      this.jokesForm.reset();
    }
  }
}
