import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-header',
  template: `<h1>{{titleName}}</h1><div>{{subtitleName}}</div>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HeaderComponent {
  @Input() titleName: string;
  @Input() subtitleName: string;
}
