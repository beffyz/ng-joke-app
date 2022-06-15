import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCardComponentComponent } from './joke-card-component.component';

describe('JokeCardComponentComponent', () => {
  let component: JokeCardComponentComponent;
  let fixture: ComponentFixture<JokeCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
