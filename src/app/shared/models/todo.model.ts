export interface Todo {
  id: number;
  title: string;
  description?: string;
  state: boolean;
  creationDate: Date;
}
