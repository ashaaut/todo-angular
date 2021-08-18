import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({ //component instance
  selector: 'todo-app',
  templateUrl: 'app.component.html',

})
export class AppComponent { //observables or dependacy
  model = new Model();
  getName() {
    return this.model.user
  }
  getTodoItems(){
    return this.model.items;
  }
}
