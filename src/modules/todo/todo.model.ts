export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export class Todo implements ITodo {
  public id: number;
  public completed: boolean = false;

  constructor(public text: string) { }
}
