import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokesComponentComponent } from './components/jokes-component/jokes-component.component';
import { JokeFormComponentComponent } from './components/jokes-component/joke-form-component/joke-form-component.component';
import { JokeListComponentComponent } from './components/jokes-component/joke-list-component/joke-list-component.component';
import { JokeCardComponentComponent } from './components/jokes-component/joke-card-component/joke-card-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponentComponent,
    JokeFormComponentComponent,
    JokeListComponentComponent,
    JokeCardComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
