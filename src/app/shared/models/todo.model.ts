export enum TodoState {
  IN_PROGRESS = 0,
  DONE = 1,
}

export interface Todo {
  id: number;
  title: string;
  description?: string;
  state: TodoState;
  creationDate: Date;
}
