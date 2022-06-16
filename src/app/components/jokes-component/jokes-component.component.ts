import { Component } from '@angular/core';
import { JokesModel } from '../../models/JokesModel';

@Component({
  selector: 'app-jokes-component',
  templateUrl: './jokes-component.component.html',
  styleUrls: ['./jokes-component.component.scss'],
})
export class JokesComponentComponent {
  jokeStorage = [
    {
      question: 'What’s the dumbest animal in the jungle?',
      answer: 'A polar bear.',
    },
    {
      question: 'Why do scuba divers jump backwards out of the boat?',
      answer: 'Because if they jumped forward, they’d still be in the boat.',
    },
  ] as JokesModel[];

  addJoke(joke: JokesModel) {
    this.jokeStorage = [...this.jokeStorage, joke];
  }

  deleteJoke(index: number) {
    this.jokeStorage.splice(index, 1)
  }
}
