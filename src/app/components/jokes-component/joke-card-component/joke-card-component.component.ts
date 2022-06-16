import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokesModel } from '../../../models/JokesModel';

@Component({
  selector: 'app-joke-card-component',
  templateUrl: './joke-card-component.component.html',
  styleUrls: ['./joke-card-component.component.scss'],
})
export class JokeCardComponentComponent {
  @Input() jokeStorage: JokesModel | undefined;

  @Output() deleteJokeEvent = new EventEmitter<null>();

  showAnswer = false;

  toggleAnswerVisibility(): void {
    this.showAnswer = !this.showAnswer;
  }

  deleteJoke(): void {
    this.deleteJokeEvent.emit();
  }
}
