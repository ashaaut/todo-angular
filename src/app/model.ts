export class Model{ //create es6 module
  user;
  items;
  constructor(){
    this.user="Asha";
    this.items=[
      new TodoItem('Buy flowers',false),
      new TodoItem('get shoes',false),
      new TodoItem('collect money',false),
      new TodoItem('call sonali',false)
    ]
  }
}
export class TodoItem{ //create es6 module
  action;
  done;
  constructor(action,done){
    this.action=action;
    this.done=done;
  }
}
