import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './../todo';

/** Dumb component
 * In essence, we let TodoListComponent bubble up the events from its child TodoListItemComponent instances.
 * The TodoListComponent then simply re-emits the events from TodoListItemComponent.
 */
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() //  This allows us to inject the todos from the parent component.
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
