import { Component, VERSION } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "To-DO application.";
  subtitle = `Angular ${VERSION.major} `;
  itemDescription: string;
  allItems: TodoItem[] = [
    {"id": "todo-1", "description": "Buy 1Kg of tomatoes", "done": false},
    {"id": "todo-2", "description": "Pick up clothes from dry cleaners", "done": false},
    {"id": "todo-3", "description": "Go to hair Saloon", "done": false},
  ]
  get items(): TodoItem[] {
    return this.allItems
  }
  addItem(description: string) {
    this.allItems.unshift({
      id: 'todo-0',
      description: description,
      done: false
    })
    this.reset()
  }
  reset() {
    this.itemDescription = null;
  }
}
