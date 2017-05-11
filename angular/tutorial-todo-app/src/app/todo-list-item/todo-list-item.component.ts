import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './../todo';

/**
 * Dumb component: we don’t actually update or remove data.
 *  We merely emit events from the TodoListItemComponent when a user clicks a link to complete or remove a todo
 */
@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
