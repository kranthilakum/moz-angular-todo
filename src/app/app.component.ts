import { Component, ViewChild, ElementRef, VERSION } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('newItem', { static: true }) newItem: ElementRef;
  title = "To-do application.";
  subtitle = `Angular ${VERSION.major} `;
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
    this.newItem.nativeElement.value = null;
  }
}
