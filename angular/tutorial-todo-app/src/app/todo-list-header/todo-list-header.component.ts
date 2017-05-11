import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from './../todo';

/**
 * The TodoListHeaderComponent is a dumb component
 *  and the AppComponent remains responsible for storing the todo using the TodoDataService.
 */
@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newToDo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodo() {
    // Instead of injecting the TodoDataService in our new TodoListHeaderComponent to save the new todo,
    //  we emit an add event and pass the new todo as an argument.
    // This decouples our TodoListHeaderComponent from the TodoDataService
    //  and allows the parent component to decide what needs to happen when a new todo is created.
    this.add.emit(this.newToDo);
    this.newToDo = new Todo();
  }

}
