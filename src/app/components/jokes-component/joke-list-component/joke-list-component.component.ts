import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokesModel } from '../../../models/JokesModel';

@Component({
  selector: 'app-joke-list-component',
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.scss'],
})
export class JokeListComponentComponent {
  @Input() jokeStorage: JokesModel[] | undefined;
  @Output() deleteJokeEvent = new EventEmitter<number>();

  deleteJoke(index: number): void {
    this.deleteJokeEvent.emit(index);
  }
}
