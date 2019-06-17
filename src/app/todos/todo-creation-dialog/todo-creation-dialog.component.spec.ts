import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreationDialogComponent } from './todo-creation-dialog.component';

describe('TodoCreationDialogComponent', () => {
  let component: TodoCreationDialogComponent;
  let fixture: ComponentFixture<TodoCreationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCreationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
